"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('bootstrap');
    const config = app.get(config_1.ConfigService);
    app.use(cors({
        origin: (_origin, cb) => cb(null, true),
        credentials: true,
    }));
    app.setGlobalPrefix('/api/v1');
    await app.listen(config.get('APP_PORT'));
    logger.log(`${config.get('APP_NAME')} is running ----------`);
    logger.log(`HOST        => ${config.get('APP_HOST')}`);
    logger.log(`PORT        => ${config.get('APP_PORT')}`);
    logger.log(`ENVIRONMENT => ${config.get('APP_ENV')}`);
}
bootstrap();
//# sourceMappingURL=main.js.map