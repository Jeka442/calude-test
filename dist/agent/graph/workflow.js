"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWorkflow = buildWorkflow;
const langgraph_1 = require("@langchain/langgraph");
const company_details_node_1 = require("../nodes/company-details.node");
const customer_details_node_1 = require("../nodes/customer-details.node");
const get_intent_node_1 = require("../nodes/get-intent.node");
const state_1 = require("./state");
function routeByIntent(state) {
    if (state.intent === "customerDetails")
        return "customerDetails";
    if (state.intent === "companyDetails")
        return "companyDetails";
    return langgraph_1.END;
}
function buildWorkflow(prompts) {
    const graph = new langgraph_1.StateGraph(state_1.AgentState)
        .addNode("getIntent", (0, get_intent_node_1.createGetIntentNode)(prompts.getIntent))
        .addNode("customerDetails", (0, customer_details_node_1.createCustomerDetailsNode)(prompts.customerDetails))
        .addNode("companyDetails", (0, company_details_node_1.createCompanyDetailsNode)(prompts.companyDetails))
        .addEdge(langgraph_1.START, "getIntent")
        .addConditionalEdges("getIntent", routeByIntent, {
        customerDetails: "customerDetails",
        companyDetails: "companyDetails",
        [langgraph_1.END]: langgraph_1.END,
    })
        .addEdge("customerDetails", langgraph_1.END)
        .addEdge("companyDetails", langgraph_1.END);
    return graph.compile();
}
//# sourceMappingURL=workflow.js.map