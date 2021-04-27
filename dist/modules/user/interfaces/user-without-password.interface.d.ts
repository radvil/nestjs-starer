import { User } from "../user.entity";
export declare type IUserWithoutPassword = Omit<User, 'password'>;
