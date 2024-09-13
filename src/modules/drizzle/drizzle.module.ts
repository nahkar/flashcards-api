import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { drizzle } from 'drizzle-orm/node-postgres';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from './schemas';

import configuration from '@config/configuration';

const { PG_CONNECTION } = configuration();
@Module({
	providers: [
		{
			provide: PG_CONNECTION,
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => {
				const connectionString = configService.get<string>('DATABASE_URL');
				const pool = new Pool({
					connectionString,
				});

				return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
			},
		},
	],
	exports: [PG_CONNECTION],
})
export class DrizzleModule {}
