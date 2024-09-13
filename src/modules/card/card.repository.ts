import { Inject, Injectable } from '@nestjs/common';

import { eq } from 'drizzle-orm/expressions';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

import * as schema from '../drizzle/schemas';

import configuration from '@config/configuration';

const { PG_CONNECTION } = configuration();
@Injectable()
export class CardRepository {
	constructor(@Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>) {}

	find(userId: string) {
		return this.db.select().from(schema.card).where(eq(schema.card.user_id, userId));
	}
}
