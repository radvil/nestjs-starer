"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenExpiredException = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("../interfaces");
class AccessTokenExpiredException extends common_1.UnauthorizedException {
    constructor() {
        super({
            errorType: interfaces_1.ErrorType.AccessTokenExpired,
            message: 'Access token has expired'
        });
    }
}
exports.AccessTokenExpiredException = AccessTokenExpiredException;
//# sourceMappingURL=access-token-expired.js.map