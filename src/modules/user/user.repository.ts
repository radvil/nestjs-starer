import {
  ConflictException,
  InternalServerErrorException,

  UnauthorizedException
} from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import { AuthDto, RegisterUserDto } from '../auth/dto';
import { User } from './user.entity';


/**
 * @description Repository is like a model in mongoose.
 * We can inject this into any class's constructor to request access to database via typeorm
 *
 */
@EntityRepository(User)
export class UserRepo extends Repository<User> {
	/**
	 *
	 * @param dto RegisterUserDto
	 * @description Create user upon sign up process
	 *
	 */
	async signUp(dto: RegisterUserDto) {
		const user = new User({
			username: dto.username,
			displayName: dto.displayName,
			email: dto.email,
		});

		try {
			user.password = await this._hashPassword(dto.password);
			await user.save();
		} catch (error) {
			// duplicate error code
			if (error.code === '23505') {
				throw new ConflictException(
					'Username or email already exists!'
				);
			} else {
				throw new InternalServerErrorException();
			}
		}
	}

	/**
	 *
	 * @param dto { username: string, password: string }
	 * @description validate user credentials upon authentication
	 *
	 */
	async validateUser(dto: AuthDto) {
		const { username, password } = dto;
		const user = await this.findOne({ username });
		const validCredential = user?.comparePassword(password);

		if (!user || !(await validCredential)) {
			throw new UnauthorizedException('Invalid credentials');
		}

		return user;
	}

	/**
	 *
	 * @param password plain password before hash
	 * @description Generates salt then hash the password before saving new user
	 *
	 */
	private async _hashPassword(password: string) {
		const salt = await genSalt();
		return await hash(password, salt);
	}
}
