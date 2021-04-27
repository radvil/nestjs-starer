import {
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserPayload } from 'src/interfaces';
import { FindOneOptions } from 'typeorm';
import { UserRepo } from '../user';
import { RegisterUserDto, AuthDto } from './dto';

type LoginResponse = Promise<{ accessToken: string; authUser: IUserPayload }>;

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserRepo) private _userRepo: UserRepo,
		private _jwtService: JwtService
	) {}

	async signUp(dto: RegisterUserDto): Promise<void> {
		return this._userRepo.signUp(dto);
	}

	async signIn(dto: AuthDto): LoginResponse {
		const user = await this._userRepo.validateUser(dto);
		const payload: IUserPayload = user.asPayload();

		if (!payload) {
			throw new UnauthorizedException();
		}

		const accessToken = this._jwtService.sign(payload);

		return { accessToken, authUser: payload };
	}

	async getAuthUser(userId: number) {
		const query: FindOneOptions = { where: { id: userId } };
		try {
			const foundUser = await this._userRepo.findOne(query);
			return foundUser.asAuthUser();
		} catch (error) {
			throw new NotFoundException('User not found.');
		}
	}
}
