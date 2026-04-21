import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("AI Agent API")
    .setDescription("LangGraph-powered intent routing agent")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(3000);
  console.log("Agent API running on http://localhost:3000");
  console.log("Swagger docs at  http://localhost:3000/docs");
}

bootstrap();
