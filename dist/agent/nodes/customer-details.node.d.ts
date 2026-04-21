import { AgentStateType } from "../graph/state";
export declare function createCustomerDetailsNode(basePrompt: string): (state: AgentStateType) => Promise<Partial<AgentStateType>>;
