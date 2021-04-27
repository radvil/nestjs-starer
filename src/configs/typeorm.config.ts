import { ConfigModule, ConfigService } from '@nestjs/config';
import {
	TypeOrmModuleAsyncOptions,
	TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export class TypeOrmConfig {
	static get(configService: ConfigService): TypeOrmModuleOptions {
		return {
			type: 'postgres',
			host: configService.get('DATABASE_HOST'),
			port: +configService.get<number>('DATABASE_PORT'),
			username: configService.get('DATABASE_USERNAME'),
			password: configService.get('DATABASE_PASSWORD'),
			database: configService.get('DATABASE_NAME'),
			entities: [__dirname + '/../**/*.entity{.ts,.js}'],
			synchronize: true,
		};
	}

  static getAsync(): TypeOrmModuleAsyncOptions {
    return {
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
        return TypeOrmConfig.get(configService);
      }
    };
  }
}

