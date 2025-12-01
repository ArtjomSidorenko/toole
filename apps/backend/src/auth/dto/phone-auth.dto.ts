import { IsString, IsPhoneNumber, Length, Matches } from 'class-validator';

export class SendOtpDto {
  @IsPhoneNumber(undefined, { message: 'Please provide a valid phone number' })
  phone: string;
}

export class VerifyOtpDto {
  @IsPhoneNumber(undefined, { message: 'Please provide a valid phone number' })
  phone: string;

  @IsString()
  @Length(6, 6, { message: 'Verification code must be 6 digits' })
  @Matches(/^\d{6}$/, { message: 'Verification code must contain only digits' })
  code: string;
}

export class PhoneLoginDto {
  @IsPhoneNumber(undefined, { message: 'Please provide a valid phone number' })
  phone: string;

  @IsString()
  @Length(6, 6, { message: 'Verification code must be 6 digits' })
  @Matches(/^\d{6}$/, { message: 'Verification code must contain only digits' })
  code: string;
}
