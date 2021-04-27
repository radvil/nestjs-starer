import { IUserPayload } from 'src/interfaces';
import { AuthService } from './auth.service';
import { AuthDto, RegisterUserDto } from './dto';
export declare class AuthController {
    private _authService;
    constructor(_authService: AuthService);
    signUp(dto: RegisterUserDto): Promise<void>;
    signIn(dto: AuthDto): Promise<{
        accessToken: string;
    }>;
    getAuthUser(req: {
        user: IUserPayload;
    }): Promise<Pick<import("../user").User, "id" | "email" | "username" | "displayName" | "isSuperUser" | "comparePassword" | "asPayload" | "withoutPassword" | "asAuthUser" | "hasId" | "save" | "remove" | "softRemove" | "recover" | "reload">>;
}
