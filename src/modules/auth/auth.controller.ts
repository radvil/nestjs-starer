import {
	Body,
	Controller,
	Get,
	Post,
	Req,
	UseGuards,
	ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IUserPayload } from 'src/interfaces';
import { AuthService } from './auth.service';
import { AuthDto, RegisterUserDto } from './dto';

@Controller('auth')
export class AuthController {
	constructor(private _authService: AuthService) {}

	@Post('/signup')
	signUp(@Body(ValidationPipe) dto: RegisterUserDto): Promise<void> {
		return this._authService.signUp(dto);
	}

	@Post('/signin')
	signIn(@Body() dto: AuthDto): Promise<{ accessToken: string }> {
		return this._authService.signIn(dto);
	}

	@Get('/user')
	@UseGuards(AuthGuard())
	getAuthUser(@Req() req: { user: IUserPayload }) {
		return this._authService.getAuthUser(req.user.id);
	}
}
