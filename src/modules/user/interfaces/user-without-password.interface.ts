import { User } from "../user.entity";

export type IUserWithoutPassword = Omit<User, 'password'>;