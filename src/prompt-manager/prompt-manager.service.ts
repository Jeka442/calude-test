import * as fs from "fs";
import * as path from "path";
import { Injectable } from "@nestjs/common";
import { PromptKey } from "./prompt-key.enum";

@Injectable()
export class PromptManagerService {
  private readonly cache = new Map<PromptKey, string>();

  get(key: PromptKey): string {
    if (this.cache.has(key)) return this.cache.get(key)!;

    const filePath = path.join(__dirname, "prompts", `${key}.md`);
    const content = fs.readFileSync(filePath, "utf-8");
    this.cache.set(key, content);
    return content;
  }
}
