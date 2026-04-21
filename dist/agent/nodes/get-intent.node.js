"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetIntentNode = createGetIntentNode;
const openai_1 = require("@langchain/openai");
const messages_1 = require("@langchain/core/messages");
const zod_1 = require("zod");
const intentSchema = zod_1.z.object({
    intent: zod_1.z.enum(["customerDetails", "companyDetails", "unsupported"]),
});
function createGetIntentNode(systemPrompt) {
    const model = new openai_1.ChatOpenAI({
        model: "gpt-4o",
        temperature: 0,
    }).withStructuredOutput(intentSchema);
    return async (state) => {
        const result = await model.invoke([
            new messages_1.SystemMessage(systemPrompt),
            new messages_1.HumanMessage(state.message),
        ]);
        return { intent: result.intent };
    };
}
//# sourceMappingURL=get-intent.node.js.map