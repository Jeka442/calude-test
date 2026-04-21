import { Injectable, OnModuleInit } from "@nestjs/common";
import { UNSUPPORTED_ANSWER } from "../constants/agent.constants";
import { PromptManagerService } from "../prompt-manager/prompt-manager.service";
import { PromptKey } from "../prompt-manager/prompt-key.enum";
import { buildWorkflow } from "./graph/workflow";

@Injectable()
export class AgentService implements OnModuleInit {
  private workflow: ReturnType<typeof buildWorkflow>;

  constructor(private readonly promptManager: PromptManagerService) {}

  onModuleInit() {
    this.workflow = buildWorkflow({
      getIntent: this.promptManager.get(PromptKey.GET_INTENT),
      customerDetails: this.promptManager.get(PromptKey.CUSTOMER_DETAILS),
      companyDetails: this.promptManager.get(PromptKey.COMPANY_DETAILS),
    });
  }

  async run(message: string): Promise<{ answer: string; intent: string }> {
    const result = await this.workflow.invoke({ message });

    if (result.intent === "unsupported" || !result.answer) {
      return { answer: UNSUPPORTED_ANSWER, intent: "unsupported" };
    }

    return { answer: result.answer, intent: result.intent };
  }
}
