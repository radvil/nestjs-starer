"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_REGEX = exports.PASSWORD_MIN_LENGTH = exports.USERNAME_MAX_LENGTH = exports.USERNAME_MIN_LENGTH = void 0;
exports.USERNAME_MIN_LENGTH = 3;
exports.USERNAME_MAX_LENGTH = 20;
exports.PASSWORD_MIN_LENGTH = 4;
exports.PASSWORD_REGEX = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
//# sourceMappingURL=validation.constant.js.map