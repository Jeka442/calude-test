"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerDetailsNode = createCustomerDetailsNode;
const openai_1 = require("@langchain/openai");
const messages_1 = require("@langchain/core/messages");
const customer_mock_1 = require("../data/customer.mock");
function createCustomerDetailsNode(basePrompt) {
    const systemPrompt = `${basePrompt}\n\nCustomer data:\n${JSON.stringify(customer_mock_1.customerData, null, 2)}`;
    const model = new openai_1.ChatOpenAI({ model: "gpt-4o", temperature: 0 });
    return async (state) => {
        const result = await model.invoke([
            new messages_1.SystemMessage(systemPrompt),
            new messages_1.HumanMessage(state.message),
        ]);
        return { answer: result.content };
    };
}
//# sourceMappingURL=customer-details.node.js.map