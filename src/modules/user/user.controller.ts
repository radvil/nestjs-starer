import { Body, Controller, Delete, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SuperUserGuard } from '../auth/guards/super-user.guard';
import { UpdateUserDto } from './dtos';
import { UserService } from './user.service';

@Controller({ path: 'user' })
export class UserController {
	constructor(private _userService: UserService) {}

  @Get('/')
  @UseGuards(AuthGuard(), SuperUserGuard)
  getAllUsers() {
    return this._userService.getAllUsers();
  }

	@Patch('/:userId')
	@UseGuards(AuthGuard(), SuperUserGuard)
	updateUser(@Param('userId') userId: number, @Body() dto: UpdateUserDto) {
		return this._userService.updateUser(userId, dto);
	}

	@Delete('/:userId')
	@UseGuards(AuthGuard(), SuperUserGuard)
	deleteUser(@Param('userId') userId: number) {
		return this._userService.deleteUser(userId);
	}
}
