/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const host = process.env.HOSTNAME || "127.0.0.1";

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: { host, port }
  });

  await app.listen();
  Logger.log(`🚀 Authentication service is running on: http://${host}:${port}`);
}

bootstrap();
