import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import { Otp } from './entities/otp.entity';
import { SmsService } from './sms.service';

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);
  private readonly OTP_LENGTH = 6;
  private readonly OTP_EXPIRY_MINUTES = 10;
  private readonly MAX_ATTEMPTS = 3;
  private readonly RATE_LIMIT_MINUTES = 1;

  constructor(
    @InjectRepository(Otp)
    private readonly otpRepository: Repository<Otp>,
    private readonly smsService: SmsService,
  ) {}


  async generateAndSendOtp(
    phone: string,
  ): Promise<{ success: boolean; message: string }> {
    const cleanPhone = this.cleanPhoneNumber(phone);

    await this.checkRateLimit(cleanPhone);

    await this.invalidateExistingOtps(cleanPhone);

    const code = this.generateOtpCode();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + this.OTP_EXPIRY_MINUTES);

    const otp = this.otpRepository.create({
      phone: cleanPhone,
      code,
      expiresAt,
      isVerified: false,
      attempts: 0,
    });

    await this.otpRepository.save(otp);

    const smsResult = await this.smsService.sendOtp(cleanPhone, code);

    if (!smsResult.success) {
      this.logger.error(
        `Failed to send OTP to ${cleanPhone}: ${smsResult.error}`,
      );
      throw new BadRequestException(
        'Failed to send verification code. Please try again.',
      );
    }

    this.logger.log(`OTP sent to ${cleanPhone} with ID: ${otp.otp_id}`);

    return {
      success: true,
      message: 'Verification code sent successfully',
    };
  }


  async verifyOtp(
    phone: string,
    code: string,
  ): Promise<{ success: boolean; message: string }> {
    const cleanPhone = this.cleanPhoneNumber(phone);

    const otp = await this.otpRepository.findOne({
      where: {
        phone: cleanPhone,
        isVerified: false,
      },
      order: { createdAt: 'DESC' },
    });

    if (!otp) {
      throw new BadRequestException(
        'No verification code found. Please request a new one.',
      );
    }

    if (new Date() > otp.expiresAt) {
      throw new BadRequestException(
        'Verification code has expired. Please request a new one.',
      );
    }

    if (otp.attempts >= this.MAX_ATTEMPTS) {
      throw new BadRequestException(
        'Too many failed attempts. Please request a new verification code.',
      );
    }

    otp.attempts += 1;
    await this.otpRepository.save(otp);

    if (otp.code !== code) {
      const remainingAttempts = this.MAX_ATTEMPTS - otp.attempts;
      if (remainingAttempts > 0) {
        throw new BadRequestException(
          `Invalid verification code. ${remainingAttempts} attempts remaining.`,
        );
      } else {
        throw new BadRequestException(
          'Invalid verification code. Please request a new one.',
        );
      }
    }

    // Mark as verified
    otp.isVerified = true;
    await this.otpRepository.save(otp);

    this.logger.log(`OTP verified successfully for ${cleanPhone}`);

    return {
      success: true,
      message: 'Phone number verified successfully',
    };
  }


  async isPhoneVerified(phone: string): Promise<boolean> {
    const cleanPhone = this.cleanPhoneNumber(phone);

    const verifiedOtp = await this.otpRepository.findOne({
      where: {
        phone: cleanPhone,
        isVerified: true,
      },
      order: { updatedAt: 'DESC' },
    });

    if (!verifiedOtp) return false;

    const thirtyMinutesAgo = new Date();
    thirtyMinutesAgo.setMinutes(thirtyMinutesAgo.getMinutes() - 30);

    return verifiedOtp.updatedAt > thirtyMinutesAgo;
  }


  async cleanupExpiredOtps(): Promise<void> {
    const now = new Date();
    const result = await this.otpRepository.delete({
      expiresAt: LessThan(now),
    });

    if (result.affected && result.affected > 0) {
      this.logger.log(`Cleaned up ${result.affected} expired OTPs`);
    }
  }

  private generateOtpCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private cleanPhoneNumber(phone: string): string {
    let cleaned = phone.replace(/\D/g, '');

    if (cleaned.length === 10 && !cleaned.startsWith('1')) {
      cleaned = '1' + cleaned;
    }

    return cleaned;
  }

  private async checkRateLimit(phone: string): Promise<void> {
    const rateLimitTime = new Date();
    rateLimitTime.setMinutes(
      rateLimitTime.getMinutes() - this.RATE_LIMIT_MINUTES,
    );

    const recentOtp = await this.otpRepository.findOne({
      where: {
        phone,
        createdAt: LessThan(rateLimitTime),
      },
      order: { createdAt: 'DESC' },
    });

    if (recentOtp && recentOtp.createdAt > rateLimitTime) {
      throw new BadRequestException(
        `Please wait before requesting another verification code.`,
      );
    }
  }

  private async invalidateExistingOtps(phone: string): Promise<void> {
    await this.otpRepository.update(
      { phone, isVerified: false },
      { isVerified: true },
    );
  }
}
