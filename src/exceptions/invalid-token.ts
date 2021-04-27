import { UnauthorizedException } from '@nestjs/common';
import { ErrorType } from 'src/interfaces';

export class InvalidTokenException extends UnauthorizedException {
	constructor() {
		super({ errorType: ErrorType.InvalidToken });
	}
}
