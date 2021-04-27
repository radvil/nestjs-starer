import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { IUserPayload } from 'src/interfaces';
import { UserRepo } from '../user';
declare const AuthStrategy_base: new (...args: any[]) => Strategy;
export declare class AuthStrategy extends AuthStrategy_base {
    private readonly _userRepo;
    readonly _configService: ConfigService;
    constructor(_userRepo: UserRepo, _configService: ConfigService);
    validate(payload: IUserPayload): Promise<IUserPayload>;
}
export {};
