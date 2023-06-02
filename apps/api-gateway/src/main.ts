import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { Transport, MicroserviceOptions } from "@nestjs/microservices";

async function bootstrap() {
	const port = process.env.PORT || 3000;
	const globalPrefix = "api";

	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix(globalPrefix);
	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: "1",
	});

	const microservice = app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.TCP,
	});

	await app.startAllMicroservices();

	/*
	 ** Swagger
	 */
	const config = new DocumentBuilder()
	.setTitle("Open Recipes")
	.setDescription("Here you have detailed documentation of all available \
					API functions. To get started, you can make the sample \
					request for each endpoint")
					.setVersion('1.0')
					.build();
					const document = SwaggerModule.createDocument(app, config);
					SwaggerModule.setup("api", app, document);

					await app.listen(port);
					Logger.log(`🚀 API is running on: http://localhost:${port}/${globalPrefix}`);
}

					bootstrap();
