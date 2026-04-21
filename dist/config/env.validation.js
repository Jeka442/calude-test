"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    OPENAI_API_KEY: zod_1.z.string().min(1, "OPENAI_API_KEY is required"),
});
function validate(config) {
    const result = envSchema.safeParse(config);
    if (!result.success) {
        const errors = result.error.issues
            .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
            .join("\n");
        throw new Error(`Environment validation failed:\n${errors}`);
    }
    return result.data;
}
//# sourceMappingURL=env.validation.js.map