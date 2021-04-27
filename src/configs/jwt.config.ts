import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export class JwtConfig {
	static getAsync(): JwtModuleAsyncOptions {
		return {
			imports: [ConfigModule],
			useFactory: (config: ConfigService) => ({
				secret: config.get('JWT_SECRET'),
				signOptions: {
					expiresIn: config.get('JWT_EXPIRATION'),
				},
			}),
			inject: [ConfigService],
		};
	}
}
