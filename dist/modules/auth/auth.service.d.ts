import { JwtService } from '@nestjs/jwt';
import { IUserPayload } from 'src/interfaces';
import { UserRepo } from '../user';
import { RegisterUserDto, AuthDto } from './dto';
declare type LoginResponse = Promise<{
    accessToken: string;
    authUser: IUserPayload;
}>;
export declare class AuthService {
    private _userRepo;
    private _jwtService;
    constructor(_userRepo: UserRepo, _jwtService: JwtService);
    signUp(dto: RegisterUserDto): Promise<void>;
    signIn(dto: AuthDto): LoginResponse;
    getAuthUser(userId: number): Promise<Pick<import("../user").User, "id" | "email" | "username" | "displayName" | "isSuperUser" | "comparePassword" | "asPayload" | "withoutPassword" | "asAuthUser" | "hasId" | "save" | "remove" | "softRemove" | "recover" | "reload">>;
}
export {};
