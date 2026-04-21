import { Annotation } from "@langchain/langgraph";

export const AgentState = Annotation.Root({
  message: Annotation<string>({
    reducer: (_, y) => y,
    default: () => "",
  }),
  intent: Annotation<string>({
    reducer: (_, y) => y,
    default: () => "",
  }),
  answer: Annotation<string>({
    reducer: (_, y) => y,
    default: () => "",
  }),
});

export type AgentStateType = typeof AgentState.State;
