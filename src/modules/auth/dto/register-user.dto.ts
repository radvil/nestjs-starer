import { IsString, MinLength, IsNotEmpty, IsEmail, MaxLength, Matches } from 'class-validator';
import {
	USERNAME_MIN_LENGTH,
	USERNAME_MAX_LENGTH,
	PASSWORD_MIN_LENGTH,
	PASSWORD_REGEX,
} from 'src/constants';

/**
 *
 * @definition DTO (Data Transfer Object)
 * @description To make sure we have a consistent data structure upon some operation
 * We can use some options provided by class-validator to match data on request body
 *
 */
export class RegisterUserDto {
	@IsString()
	@MinLength(USERNAME_MIN_LENGTH, {
		message: `Minimum ${USERNAME_MIN_LENGTH} for username`,
	})
	@MaxLength(USERNAME_MAX_LENGTH, {
		message: `Maximum ${USERNAME_MAX_LENGTH} characters for username`,
	})
	public username: string;

	@IsString()
  @IsNotEmpty()
  @IsEmail()
	public email: string;

	@IsString()
  @IsNotEmpty()
	public displayName: string;

	@IsString()
	@MinLength(PASSWORD_MIN_LENGTH, {
		message: `Minimum ${PASSWORD_MIN_LENGTH} for password`,
	})
	@Matches(PASSWORD_REGEX, {
		message:
			'Password must contain at least one uppercase, one lowercase, and one number!',
	})
	public password: string;
}
