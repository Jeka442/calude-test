import { PromptKey } from "./prompt-key.enum";
export declare class PromptManagerService {
    private readonly cache;
    get(key: PromptKey): string;
}
