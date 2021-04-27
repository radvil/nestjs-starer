"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserRepo = class UserRepo extends typeorm_1.Repository {
    async signUp(dto) {
        const user = new user_entity_1.User({
            username: dto.username,
            displayName: dto.displayName,
            email: dto.email,
        });
        try {
            user.password = await this._hashPassword(dto.password);
            await user.save();
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Username or email already exists!');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async validateUser(dto) {
        const { username, password } = dto;
        const user = await this.findOne({ username });
        const validCredential = user === null || user === void 0 ? void 0 : user.comparePassword(password);
        if (!user || !(await validCredential)) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
    async _hashPassword(password) {
        const salt = await bcrypt_1.genSalt();
        return await bcrypt_1.hash(password, salt);
    }
};
UserRepo = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepo);
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repository.js.map