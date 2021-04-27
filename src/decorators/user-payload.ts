import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUserPayload } from 'src/interfaces';

export const UserPayload = createParamDecorator(
	(data: unknown, ctx: ExecutionContext): IUserPayload => {
		const request = ctx.switchToHttp().getRequest();
		return request.user;
	}
);
