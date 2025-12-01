import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';
import { OtpService } from './otp.service';
import { SendOtpDto, VerifyOtpDto, PhoneLoginDto } from './dto/phone-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly otpService: OtpService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (!user) return null;
    const passwordMatch = await argon2.verify(user.password, password);
    if (user && passwordMatch) {
      return user;
    }
    throw new UnauthorizedException('Invalid email or password');
  }

  async login(user: IUser) {
    const { user_id, email } = user;
    return {
      user_id,
      email,
      token: this.jwtService.sign({
        user_id: user.user_id,
        email: user.email,
      }),
    };
  }


  async sendOtpForRegistration(sendOtpDto: SendOtpDto) {
    const { phone } = sendOtpDto;

    return this.otpService.generateAndSendOtp(phone);
  }

  async sendOtp(sendOtpDto: SendOtpDto) {
    const { phone } = sendOtpDto;

    const user = await this.userService.findByPhone(phone);
    if (!user) {
      throw new BadRequestException('No account found with this phone number');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    return this.otpService.generateAndSendOtp(phone);
  }

  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { phone, code } = verifyOtpDto;
    return this.otpService.verifyOtp(phone, code);
  }

  async loginWithPhone(phoneLoginDto: PhoneLoginDto) {
    const { phone, code } = phoneLoginDto;

    const otpResult = await this.otpService.verifyOtp(phone, code);
    if (!otpResult.success) {
      throw new UnauthorizedException('Invalid verification code');
    }

    const user = await this.userService.findByPhone(phone);
    if (!user) {
      throw new UnauthorizedException(
        'No account found with this phone number',
      );
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    return this.login(user);
  }

  async registerWithPhoneVerification(createUserDto: any) {
    const isVerified = await this.otpService.isPhoneVerified(
      createUserDto.phone,
    );
    if (!isVerified) {
      throw new BadRequestException(
        'Phone number must be verified before registration',
      );
    }

    return this.userService.create(createUserDto);
  }
}
