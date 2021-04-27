"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtConfig = void 0;
const config_1 = require("@nestjs/config");
class JwtConfig {
    static getAsync() {
        return {
            imports: [config_1.ConfigModule],
            useFactory: (config) => ({
                secret: config.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: config.get('JWT_EXPIRATION'),
                },
            }),
            inject: [config_1.ConfigService],
        };
    }
}
exports.JwtConfig = JwtConfig;
//# sourceMappingURL=jwt.config.js.map