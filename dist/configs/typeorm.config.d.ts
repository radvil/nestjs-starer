import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class TypeOrmConfig {
    static get(configService: ConfigService): TypeOrmModuleOptions;
    static getAsync(): TypeOrmModuleAsyncOptions;
}
