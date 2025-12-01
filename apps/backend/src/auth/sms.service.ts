import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface SmsResponse {
    success: boolean;
    messageId?: string;
    error?: string;
}

@Injectable()
export class SmsService {
    private readonly logger = new Logger(SmsService.name);

    constructor(private readonly configService: ConfigService) {}

    async sendOtp(phone: string, code: string): Promise<SmsResponse> {
        const message = `Your verification code is: ${code}. This code will expire in 10 minutes.`;

        // For development/testing - log the code
        if (this.configService.get('NODE_ENV') === 'development') {
            this.logger.log(`SMS OTP for ${phone}: ${code}`);
            return { success: true, messageId: 'dev-' + Date.now() };
        }

        // Production implementation with Twilio
        try {
            const accountSid = this.configService.get('TWILIO_ACCOUNT_SID');
            const authToken = this.configService.get('TWILIO_AUTH_TOKEN');
            const fromPhone = this.configService.get('TWILIO_PHONE_NUMBER');

            if (!accountSid || !authToken || !fromPhone) {
                this.logger.warn('Twilio credentials not configured. Using development mode.');
                this.logger.log(`SMS OTP for ${phone}: ${code}`);
                return { success: true, messageId: 'dev-fallback-' + Date.now() };
            }

            // Uncomment and install twilio package for production:
            // const twilio = require('twilio')(accountSid, authToken);
            // const result = await twilio.messages.create({
            //   body: message,
            //   from: fromPhone,
            //   to: phone
            // });
            // return { success: true, messageId: result.sid };

            // For now, just log (remove this in production)
            this.logger.log(`Would send SMS to ${phone}: ${code}`);
            return { success: true, messageId: 'mock-' + Date.now() };

        } catch (error) {
            this.logger.error(`Failed to send SMS to ${phone}:`, error);
            return { success: false, error: error.message };
        }
    }

    // Alternative: Integration with other SMS providers
    async sendOtpWithCustomProvider(phone: string, code: string): Promise<SmsResponse> {
        // Implement your preferred SMS provider here
        // Examples: AWS SNS, Vonage (Nexmo), MessageBird, etc.

        const message = `Your verification code is: ${code}. This code will expire in 10 minutes.`;

        // Example with a generic HTTP SMS API:
        try {
            // const response = await fetch('your-sms-provider-api-url', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({
            //     phone,
            //     message,
            //     // other provider-specific fields
            //   })
            // });
            //
            // const result = await response.json();
            // return { success: response.ok, messageId: result.id };

            this.logger.log(`Custom provider SMS to ${phone}: ${code}`);
            return { success: true, messageId: 'custom-' + Date.now() };
        } catch (error) {
            this.logger.error(`Custom SMS provider failed for ${phone}:`, error);
            return { success: false, error: error.message };
        }
    }
}