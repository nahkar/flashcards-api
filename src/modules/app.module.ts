import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';

import { CardModule } from './card/card.module';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			playground: true,
		}),
		ConfigModule.forRoot({ isGlobal: true }),
		DrizzleModule,
		CardModule,
	],
})
export class AppModule {}
