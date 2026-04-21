import { Module } from "@nestjs/common";
import { PromptManagerModule } from "../prompt-manager/prompt-manager.module";
import { AgentService } from "./agent.service";

@Module({
  imports: [PromptManagerModule],
  providers: [AgentService],
  exports: [AgentService],
})
export class AgentModule {}
