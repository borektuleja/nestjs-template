import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import AppModule from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle("Light example")
		.setDescription("The Light API description")
		.setVersion("0.0")
		.build();
	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup("/", app, document);

	app.useGlobalPipes(
		new ValidationPipe({
			transformOptions: {
				strategy: "excludeAll",
			},
		}),
	);

	await app.listen(3000);
}

bootstrap();
