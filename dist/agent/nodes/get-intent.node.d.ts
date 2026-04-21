import { AgentStateType } from "../graph/state";
export declare function createGetIntentNode(systemPrompt: string): (state: AgentStateType) => Promise<Partial<AgentStateType>>;
