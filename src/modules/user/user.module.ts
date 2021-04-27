import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserController } from './user.controller';
import { UserRepo } from './user.repository';
import { UserService } from './user.service';

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [TypeOrmModule.forFeature([UserRepo]), AuthModule],
})
export class UserModule {}
