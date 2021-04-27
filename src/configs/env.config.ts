import { ConfigModuleOptions } from '@nestjs/config';

export class EnvConfig {
	static getGlobalConfig(): ConfigModuleOptions {
		return <ConfigModuleOptions>{
			isGlobal: true,
			envFilePath: ['.development.env'],
		};
	}
}
