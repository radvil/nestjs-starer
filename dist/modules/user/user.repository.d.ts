import { Repository } from 'typeorm';
import { AuthDto, RegisterUserDto } from '../auth/dto';
import { User } from './user.entity';
export declare class UserRepo extends Repository<User> {
    signUp(dto: RegisterUserDto): Promise<void>;
    validateUser(dto: AuthDto): Promise<User>;
    private _hashPassword;
}
