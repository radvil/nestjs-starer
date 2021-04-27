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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const interfaces_1 = require("../../interfaces");
let User = class User extends typeorm_1.BaseEntity {
    constructor(newUser) {
        super();
        Object.assign(this, newUser);
    }
    async comparePassword(password) {
        return await bcrypt_1.compare(password, this.password);
    }
    asPayload() {
        return {
            id: this.id,
            username: this.username,
            isSuperUser: this.isSuperUser,
        };
    }
    get withoutPassword() {
        const _a = this, { password } = _a, props = __rest(_a, ["password"]);
        return props;
    }
    asAuthUser() {
        const _a = this, { password } = _a, authUser = __rest(_a, ["password"]);
        return authUser;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "displayName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        name: 'isSuperUser',
        type: 'boolean',
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isSuperUser", void 0);
User = __decorate([
    typeorm_1.Entity({ name: 'users' }),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map