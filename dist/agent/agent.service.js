"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentService = void 0;
const common_1 = require("@nestjs/common");
const prompt_manager_service_1 = require("../prompt-manager/prompt-manager.service");
const prompt_key_enum_1 = require("../prompt-manager/prompt-key.enum");
const workflow_1 = require("./graph/workflow");
const UNSUPPORTED_ANSWER = "I'm not able to answer this type of question.";
let AgentService = class AgentService {
    constructor(promptManager) {
        this.promptManager = promptManager;
    }
    onModuleInit() {
        this.workflow = (0, workflow_1.buildWorkflow)({
            getIntent: this.promptManager.get(prompt_key_enum_1.PromptKey.GET_INTENT),
            customerDetails: this.promptManager.get(prompt_key_enum_1.PromptKey.CUSTOMER_DETAILS),
            companyDetails: this.promptManager.get(prompt_key_enum_1.PromptKey.COMPANY_DETAILS),
        });
    }
    async run(message) {
        const result = await this.workflow.invoke({ message });
        if (result.intent === "unsupported" || !result.answer) {
            return { answer: UNSUPPORTED_ANSWER, intent: "unsupported" };
        }
        return { answer: result.answer, intent: result.intent };
    }
};
exports.AgentService = AgentService;
exports.AgentService = AgentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prompt_manager_service_1.PromptManagerService])
], AgentService);
//# sourceMappingURL=agent.service.js.map