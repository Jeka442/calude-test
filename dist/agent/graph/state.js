"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentState = void 0;
const langgraph_1 = require("@langchain/langgraph");
exports.AgentState = langgraph_1.Annotation.Root({
    message: (0, langgraph_1.Annotation)({
        reducer: (_, y) => y,
        default: () => "",
    }),
    intent: (0, langgraph_1.Annotation)({
        reducer: (_, y) => y,
        default: () => "",
    }),
    answer: (0, langgraph_1.Annotation)({
        reducer: (_, y) => y,
        default: () => "",
    }),
});
//# sourceMappingURL=state.js.map