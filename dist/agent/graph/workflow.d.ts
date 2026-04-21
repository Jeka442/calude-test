interface WorkflowPrompts {
    getIntent: string;
    customerDetails: string;
    companyDetails: string;
}
export declare function buildWorkflow(prompts: WorkflowPrompts): import("@langchain/langgraph").CompiledStateGraph<{
    message: string;
    intent: string;
    answer: string;
}, {
    message?: string | import("@langchain/langgraph").OverwriteValue<string>;
    intent?: string | import("@langchain/langgraph").OverwriteValue<string>;
    answer?: string | import("@langchain/langgraph").OverwriteValue<string>;
}, "customerDetails" | "companyDetails" | "__start__" | "getIntent", {
    message: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
    intent: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
    answer: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
}, {
    message: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
    intent: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
    answer: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
}, import("@langchain/langgraph").StateDefinition, {
    getIntent: Partial<import("@langchain/langgraph").StateType<{
        message: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
        intent: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
        answer: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
    }>>;
    customerDetails: Partial<import("@langchain/langgraph").StateType<{
        message: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
        intent: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
        answer: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
    }>>;
    companyDetails: Partial<import("@langchain/langgraph").StateType<{
        message: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
        intent: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
        answer: import("@langchain/langgraph").BaseChannel<string, string | import("@langchain/langgraph").OverwriteValue<string>, unknown>;
    }>>;
}, unknown, unknown>;
export {};
