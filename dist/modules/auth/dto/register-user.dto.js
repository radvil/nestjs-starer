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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = void 0;
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../constants");
class RegisterUserDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(constants_1.USERNAME_MIN_LENGTH, {
        message: `Minimum ${constants_1.USERNAME_MIN_LENGTH} for username`,
    }),
    class_validator_1.MaxLength(constants_1.USERNAME_MAX_LENGTH, {
        message: `Maximum ${constants_1.USERNAME_MAX_LENGTH} characters for username`,
    }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "displayName", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(constants_1.PASSWORD_MIN_LENGTH, {
        message: `Minimum ${constants_1.PASSWORD_MIN_LENGTH} for password`,
    }),
    class_validator_1.Matches(constants_1.PASSWORD_REGEX, {
        message: 'Password must contain at least one uppercase, one lowercase, and one number!',
    }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "password", void 0);
exports.RegisterUserDto = RegisterUserDto;
//# sourceMappingURL=register-user.dto.js.map