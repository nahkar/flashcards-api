import { integer, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	user_id: uuid('user_id').primaryKey().defaultRandom(),
	first_name: varchar('first_name', { length: 255 }).notNull(),
	last_name: varchar('last_name', { length: 255 }).notNull(),
	age: integer('age'),
	email: text('email').notNull(),
});
