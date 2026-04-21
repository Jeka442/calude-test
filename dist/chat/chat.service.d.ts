import { AgentService } from "../agent/agent.service";
export declare class ChatService {
    private readonly agentService;
    constructor(agentService: AgentService);
    chat(message: string): Promise<{
        answer: string;
        intent: string;
    }>;
}
