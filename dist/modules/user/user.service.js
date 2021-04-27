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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const interfaces_1 = require("../../interfaces");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(_userRepo) {
        this._userRepo = _userRepo;
    }
    async getAllUsers() {
        return await this._userRepo.find({
            select: ['id', 'username', 'displayName', 'email', 'isSuperUser'],
        });
    }
    async getUser(userId) {
        try {
            const user = await this._userRepo.findOne({ id: userId });
            return user.asPayload();
        }
        catch (error) {
            throw new common_1.NotFoundException('User not found!');
        }
    }
    async updateUser(userId, dto) {
        const { withoutPassword: foundUser, } = await this._userRepo.findOneOrFail(userId);
        if (!foundUser)
            throw new common_1.NotFoundException('User not found');
        try {
            const updatedUser = await this._userRepo.save(Object.assign(Object.assign({}, foundUser), dto));
            return updatedUser;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async deleteUser(userId) {
        try {
            await this._userRepo.findOneOrFail(userId);
            return this._userRepo.delete(userId);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepo)),
    __metadata("design:paramtypes", [user_repository_1.UserRepo])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map