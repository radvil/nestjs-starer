"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPayload = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("../interfaces");
exports.UserPayload = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=user-payload.js.map