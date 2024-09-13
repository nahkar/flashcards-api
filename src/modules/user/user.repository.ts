import { Inject, Injectable } from '@nestjs/common';

import { eq } from 'drizzle-orm/expressions';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

import * as schema from '../drizzle/schemas';
import { CreateUserArgs } from './dto/create-user.args';

import configuration from '@config/configuration';

const { PG_CONNECTION } = configuration();
@Injectable()
export class UserRepository {
	constructor(@Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>) {}

	find() {
		return this.db.select({ user_id: schema.user.user_id }).from(schema.user);
	}
	findOne(user_id: string) {
		return this.db.select().from(schema.user).where(eq(schema.user.user_id, user_id));
	}
	findByEmail(email: string) {
		return this.db.select().from(schema.user).where(eq(schema.user.email, email));
	}

	createUser({ first_name, last_name, age, email }: CreateUserArgs) {
		const valuesToInsert = { first_name, last_name, email };

		if (age) {
			valuesToInsert['age'] = age;
		}

		return this.db
			.insert(schema.user)
			.values(valuesToInsert)
			.returning({ user_id: schema.user.user_id })
			.execute();
	}
}
