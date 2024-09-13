import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';

import { AppModule } from '@modules/app.module';
import { graphqlUploadExpress } from 'graphql-upload-minimal';

import configuration from '@config/configuration';

const { PORT } = configuration();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: '*',
		credentials: true,
	});
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
	app.use(graphqlUploadExpress({ maxFileSize: 2147483648, maxFiles: 10 }));
	await app.listen(PORT, () => console.log(`🚀 Running on port: ${PORT}`));
}
bootstrap();
