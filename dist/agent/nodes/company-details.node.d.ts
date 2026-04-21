import { AgentStateType } from "../graph/state";
export declare function createCompanyDetailsNode(basePrompt: string): (state: AgentStateType) => Promise<Partial<AgentStateType>>;
