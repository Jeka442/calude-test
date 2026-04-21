"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompanyDetailsNode = createCompanyDetailsNode;
const openai_1 = require("@langchain/openai");
const messages_1 = require("@langchain/core/messages");
const company_mock_1 = require("../data/company.mock");
function createCompanyDetailsNode(basePrompt) {
    const systemPrompt = `${basePrompt}\n\nCompany data:\n${JSON.stringify(company_mock_1.companyData, null, 2)}`;
    const model = new openai_1.ChatOpenAI({ model: "gpt-4o", temperature: 0 });
    return async (state) => {
        const result = await model.invoke([
            new messages_1.SystemMessage(systemPrompt),
            new messages_1.HumanMessage(state.message),
        ]);
        return { answer: result.content };
    };
}
//# sourceMappingURL=company-details.node.js.map