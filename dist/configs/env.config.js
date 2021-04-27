"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfig = void 0;
class EnvConfig {
    static getGlobalConfig() {
        return {
            isGlobal: true,
            envFilePath: ['.development.env'],
        };
    }
}
exports.EnvConfig = EnvConfig;
//# sourceMappingURL=env.config.js.map