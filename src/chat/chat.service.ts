import { Injectable } from "@nestjs/common";
import { AgentService } from "../agent/agent.service";

@Injectable()
export class ChatService {
  constructor(private readonly agentService: AgentService) {}

  async chat(message: string) {
    return this.agentService.run(message);
  }
}
