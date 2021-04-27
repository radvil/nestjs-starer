import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnvConfig, TypeOrmConfig } from './configs';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [
		ConfigModule.forRoot(EnvConfig.getGlobalConfig()),
		TypeOrmModule.forRootAsync(TypeOrmConfig.getAsync()),
		AuthModule,
		UserModule,
	],
})
export class AppModule {}
