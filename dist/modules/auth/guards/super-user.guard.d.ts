import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class SuperUserGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
