import { ExecutionContext } from '@nestjs/common';
import { TokenService } from '../services';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private _tokenService;
    constructor(_tokenService: TokenService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(error: Error, user: any): any;
}
export {};
