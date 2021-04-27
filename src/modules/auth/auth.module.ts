import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfig } from 'src/configs';

import { UserRepo } from '../user/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';

@Module({
	imports: [
		JwtModule.registerAsync(JwtConfig.getAsync()),
		PassportModule.register({ defaultStrategy: 'jwt' }),
		TypeOrmModule.forFeature([UserRepo]),
	],
	controllers: [AuthController],
	providers: [AuthService, AuthStrategy],
	exports: [PassportModule, AuthStrategy],
})
export class AuthModule {}
