import { JwtService } from '@nestjs/jwt';
import { TokenType } from 'src/interfaces';
export declare class TokenService {
    private _jwtService;
    constructor(_jwtService: JwtService);
    verifyToken(token: string, type: TokenType): any;
}
