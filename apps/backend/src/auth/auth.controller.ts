import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SendOtpDto, VerifyOtpDto, PhoneLoginDto } from './dto/phone-auth.dto';

// localhost:3001/api/auth
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // localhost:3001/api/auth/login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // localhost:3001/api/auth/send-otp
  @Post('send-otp')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  async sendOtp(@Body() sendOtpDto: SendOtpDto) {
    return this.authService.sendOtp(sendOtpDto);
  }

  // localhost:3001/api/auth/verify-otp
  @Post('verify-otp')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.authService.verifyOtp(verifyOtpDto);
  }

  // localhost:3001/api/auth/login/phone
  @Post('login/phone')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  async loginWithPhone(@Body() phoneLoginDto: PhoneLoginDto) {
    return this.authService.loginWithPhone(phoneLoginDto);
  }

  // localhost:3001/api/auth/verify-phone-for-registration
  @Post('verify-phone-for-registration')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  async sendOtpForRegistration(@Body() sendOtpDto: SendOtpDto) {
    return this.authService.sendOtpForRegistration(sendOtpDto);
  }

  // localhost:3001/api/auth/profile
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
