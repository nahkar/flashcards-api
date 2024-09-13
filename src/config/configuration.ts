import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });

export default () => ({
	PG_CONNECTION: 'PG_CONNECTION',
	DATABASE_URL: process.env.DATABASE_URL,
	PORT: parseInt(process.env.PORT, 10),
	NODE_ENV: process.env.NODE_ENV,
	// REDIS
	REDIS_PORT: parseInt(process.env.REDIS_PORT, 10),
	REDIS_HOST: process.env.REDIS_HOST,
	REDIS_TTL: parseInt(process.env.REDIS_TTL, 10) || 300,
	// AWS
	AWS_REGION: process.env.AWS_REGION,
	AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
	AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
});
