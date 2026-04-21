import { OnModuleInit } from "@nestjs/common";
import { PromptManagerService } from "../prompt-manager/prompt-manager.service";
export declare class AgentService implements OnModuleInit {
    private readonly promptManager;
    private workflow;
    constructor(promptManager: PromptManagerService);
    onModuleInit(): void;
    run(message: string): Promise<{
        answer: string;
        intent: string;
    }>;
}
