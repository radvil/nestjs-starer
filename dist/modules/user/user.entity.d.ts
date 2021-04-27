import { BaseEntity } from 'typeorm';
import { IUserPayload } from 'src/interfaces';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    username: string;
    displayName: string;
    password: string;
    isSuperUser: boolean;
    comparePassword(password: string): Promise<boolean>;
    asPayload(): IUserPayload;
    get withoutPassword(): Omit<this, 'password'>;
    asAuthUser(): Omit<this, 'password'>;
    constructor(newUser?: Partial<User>);
}
