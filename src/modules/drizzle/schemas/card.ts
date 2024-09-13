import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

import { user } from './user';

export const card = pgTable('card', {
	card_id: uuid('card_id').primaryKey().defaultRandom(),
	word: varchar('word', { length: 255 }).notNull(),
	translate: varchar('translate', { length: 255 }).notNull(),
	user_id: uuid('user_id').references(() => user.user_id, { onDelete: 'cascade' }),
});
