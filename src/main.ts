import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const logger = new Logger('bootstrap');
	const config = app.get(ConfigService);

	app.use(
		cors({
			origin: (_origin: any, cb: Function) => cb(null, true),
			credentials: true,
		})
	);
	app.setGlobalPrefix('/api/v1');

	await app.listen(config.get('APP_PORT'));
	logger.log(`${config.get('APP_NAME')} is running ----------`);
	logger.log(`HOST        => ${config.get('APP_HOST')}`);
	logger.log(`PORT        => ${config.get('APP_PORT')}`);
	logger.log(`ENVIRONMENT => ${config.get('APP_ENV')}`);
}
bootstrap();
