import { END, START, StateGraph } from "@langchain/langgraph";
import { createCompanyDetailsNode } from "../nodes/company-details.node";
import { createCustomerDetailsNode } from "../nodes/customer-details.node";
import { createGetIntentNode } from "../nodes/get-intent.node";
import { AgentState, AgentStateType } from "./state";

interface WorkflowPrompts {
  getIntent: string;
  customerDetails: string;
  companyDetails: string;
}

function routeByIntent(state: AgentStateType): string {
  if (state.intent === "customerDetails") return "customerDetails";
  if (state.intent === "companyDetails") return "companyDetails";
  return END;
}

export function buildWorkflow(prompts: WorkflowPrompts) {
  const graph = new StateGraph(AgentState)
    .addNode("getIntent", createGetIntentNode(prompts.getIntent))
    .addNode("customerDetails", createCustomerDetailsNode(prompts.customerDetails))
    .addNode("companyDetails", createCompanyDetailsNode(prompts.companyDetails))
    .addEdge(START, "getIntent")
    .addConditionalEdges("getIntent", routeByIntent, {
      customerDetails: "customerDetails",
      companyDetails: "companyDetails",
      [END]: END,
    })
    .addEdge("customerDetails", END)
    .addEdge("companyDetails", END);

  return graph.compile();
}
