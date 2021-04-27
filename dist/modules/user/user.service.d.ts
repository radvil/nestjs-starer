import { IUserPayload } from 'src/interfaces';
import { DeleteResult } from 'typeorm';
import { UpdateUserDto } from './dtos';
import { IUserWithoutPassword } from './interfaces';
import { User } from './user.entity';
import { UserRepo } from './user.repository';
export declare class UserService {
    private _userRepo;
    constructor(_userRepo: UserRepo);
    getAllUsers(): Promise<User[]>;
    getUser(userId: number): Promise<IUserPayload>;
    updateUser(userId: number, dto: UpdateUserDto): Promise<IUserWithoutPassword>;
    deleteUser(userId: number): Promise<DeleteResult>;
}
