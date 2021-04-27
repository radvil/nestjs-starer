import {
	Injectable,
	InternalServerErrorException,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserPayload } from 'src/interfaces';
import { DeleteResult } from 'typeorm';
import { UpdateUserDto } from './dtos';
import { IUserWithoutPassword } from './interfaces';
import { User } from './user.entity';
import { UserRepo } from './user.repository';

@Injectable()
export class UserService {
	constructor(@InjectRepository(UserRepo) private _userRepo: UserRepo) {}

	async getAllUsers(): Promise<User[]> {
		return await this._userRepo.find({
			select: ['id', 'username', 'displayName', 'email', 'isSuperUser'],
		});
	}

	async getUser(userId: number): Promise<IUserPayload> {
		try {
			const user = await this._userRepo.findOne({ id: userId });
			return user.asPayload();
		} catch (error) {
			throw new NotFoundException('User not found!');
		}
	}

	/**
	 *
	 * @param userId number
	 * @returns Promise<User>
	 * @description findUser, then update
	 *
	 */
	async updateUser(
		userId: number,
		dto: UpdateUserDto
	): Promise<IUserWithoutPassword> {
		const {
			withoutPassword: foundUser,
		} = await this._userRepo.findOneOrFail(userId);
		if (!foundUser) throw new NotFoundException('User not found');

		try {
			const updatedUser = await this._userRepo.save({
				...foundUser,
				...dto,
			});
			return updatedUser;
		} catch (error) {
			throw new InternalServerErrorException();
		}
	}

	/**
	 *
	 * @param userId number
	 * @returns Promise<{raw: any, affected?: number | null}>
	 * @description findUser, then delete
	 *
	 */
	async deleteUser(userId: number): Promise<DeleteResult> {
		try {
			await this._userRepo.findOneOrFail(userId);
			return this._userRepo.delete(userId);
		} catch (error) {
			throw new InternalServerErrorException();
		}
	}
}
