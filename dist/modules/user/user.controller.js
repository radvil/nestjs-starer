"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const super_user_guard_1 = require("../auth/guards/super-user.guard");
const dtos_1 = require("./dtos");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(_userService) {
        this._userService = _userService;
    }
    getAllUsers() {
        return this._userService.getAllUsers();
    }
    updateUser(userId, dto) {
        return this._userService.updateUser(userId, dto);
    }
    deleteUser(userId) {
        return this._userService.deleteUser(userId);
    }
};
__decorate([
    common_1.Get('/'),
    common_1.UseGuards(passport_1.AuthGuard(), super_user_guard_1.SuperUserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsers", null);
__decorate([
    common_1.Patch('/:userId'),
    common_1.UseGuards(passport_1.AuthGuard(), super_user_guard_1.SuperUserGuard),
    __param(0, common_1.Param('userId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dtos_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    common_1.Delete('/:userId'),
    common_1.UseGuards(passport_1.AuthGuard(), super_user_guard_1.SuperUserGuard),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    common_1.Controller({ path: 'user' }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map