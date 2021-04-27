import { UpdateUserDto } from './dtos';
import { UserService } from './user.service';
export declare class UserController {
    private _userService;
    constructor(_userService: UserService);
    getAllUsers(): Promise<import("./user.entity").User[]>;
    updateUser(userId: number, dto: UpdateUserDto): Promise<Pick<import("./user.entity").User, "id" | "email" | "username" | "displayName" | "isSuperUser" | "comparePassword" | "asPayload" | "withoutPassword" | "asAuthUser" | "hasId" | "save" | "remove" | "softRemove" | "recover" | "reload">>;
    deleteUser(userId: number): Promise<import("typeorm").DeleteResult>;
}
