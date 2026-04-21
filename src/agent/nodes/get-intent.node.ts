import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { z } from "zod";
import { LLM_MODEL, LLM_TEMPERATURE } from "../../constants/model.constants";
import { AgentStateType } from "../graph/state";

const intentSchema = z.object({
  intent: z.enum(["customerDetails", "companyDetails", "unsupported"]),
});

export function createGetIntentNode(systemPrompt: string) {
  const model = new ChatOpenAI({
    model: LLM_MODEL,
    temperature: LLM_TEMPERATURE,
  }).withStructuredOutput(intentSchema);

  return async (state: AgentStateType): Promise<Partial<AgentStateType>> => {
    const result = await model.invoke([
      new SystemMessage(systemPrompt),
      new HumanMessage(state.message),
    ]);

    return { intent: result.intent };
  };
}
