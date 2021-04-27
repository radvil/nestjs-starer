import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from "src/constants";

export class UpdateUserDto {
	@IsString()
  @IsOptional()
	@MinLength(USERNAME_MIN_LENGTH, {
		message: `Minimum ${USERNAME_MIN_LENGTH} for username`,
	})
	@MaxLength(USERNAME_MAX_LENGTH, {
		message: `Maximum ${USERNAME_MAX_LENGTH} characters for username`,
	})
	public username: string;

	@IsString()
  @IsOptional()
	public email: string;

	@IsString()
  @IsOptional()
	public displayName: string;  
}