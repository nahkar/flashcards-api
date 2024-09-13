import { defineConfig } from 'drizzle-kit';

import configuration from '@config/configuration';

const { DATABASE_URL } = configuration();

export default defineConfig({
	schema: './src/modules/drizzle/schemas',
	out: './src/modules/drizzle/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: DATABASE_URL,
	},
	verbose: true,
});
