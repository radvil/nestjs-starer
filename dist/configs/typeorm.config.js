"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
class TypeOrmConfig {
    static get(configService) {
        return {
            type: 'postgres',
            host: configService.get('DATABASE_HOST'),
            port: +configService.get('DATABASE_PORT'),
            username: configService.get('DATABASE_USERNAME'),
            password: configService.get('DATABASE_PASSWORD'),
            database: configService.get('DATABASE_NAME'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
        };
    }
    static getAsync() {
        return {
            imports: [config_1.ConfigModule],
            inject: [config_1.ConfigService],
            useFactory: async (configService) => {
                return TypeOrmConfig.get(configService);
            }
        };
    }
}
exports.TypeOrmConfig = TypeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map