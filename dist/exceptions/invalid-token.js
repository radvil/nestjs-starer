"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTokenException = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("../interfaces");
class InvalidTokenException extends common_1.UnauthorizedException {
    constructor() {
        super({ errorType: interfaces_1.ErrorType.InvalidToken });
    }
}
exports.InvalidTokenException = InvalidTokenException;
//# sourceMappingURL=invalid-token.js.map