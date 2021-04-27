import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';

import { IUserPayload } from 'src/interfaces';
import { UserRepo } from '../user';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
	constructor(
		@InjectRepository(UserRepo)
		private readonly _userRepo: UserRepo,
    public readonly _configService: ConfigService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: _configService.get('JWT_SECRET')
		});
	}

  /**
   * 
   * @param payload { id: string, username: string }
   * @description replace default validate strategy provided by passport
   * Intercept any request with this guard
   * 
   */
	async validate(payload: IUserPayload): Promise<IUserPayload> {
		const { username } = payload;
    try {
      const foundUser = await this._userRepo.findOne({ username });
      return foundUser.asPayload();
    } catch (error) {
			throw new UnauthorizedException();
    }
	}
}
