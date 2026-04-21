import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { LLM_MODEL, LLM_TEMPERATURE } from "../../constants/model.constants";
import { companyData } from "../data/company.mock";
import { AgentStateType } from "../graph/state";

export function createCompanyDetailsNode(basePrompt: string) {
  const systemPrompt = `${basePrompt}\n\nCompany data:\n${JSON.stringify(companyData, null, 2)}`;
  const model = new ChatOpenAI({ model: LLM_MODEL, temperature: LLM_TEMPERATURE });

  return async (state: AgentStateType): Promise<Partial<AgentStateType>> => {
    const result = await model.invoke([
      new SystemMessage(systemPrompt),
      new HumanMessage(state.message),
    ]);

    return { answer: result.content as string };
  };
}
