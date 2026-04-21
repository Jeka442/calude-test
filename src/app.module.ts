import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { validate } from "./config/env.validation";
import { ChatModule } from "./chat/chat.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    ChatModule,
  ],
})
export class AppModule {}
