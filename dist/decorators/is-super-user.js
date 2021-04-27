"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSuperUser = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("../interfaces");
exports.IsSuperUser = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.isSuperUser;
});
//# sourceMappingURL=is-super-user.js.map