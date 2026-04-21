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
exports.ChatResponseDto = exports.ChatRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ChatRequestDto {
}
exports.ChatRequestDto = ChatRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "What is the customer phone number?" }),
    __metadata("design:type", String)
], ChatRequestDto.prototype, "message", void 0);
class ChatResponseDto {
}
exports.ChatResponseDto = ChatResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "The customer phone number is +1 555-123-4567." }),
    __metadata("design:type", String)
], ChatResponseDto.prototype, "answer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "customerDetails", enum: ["customerDetails", "companyDetails", "unsupported"] }),
    __metadata("design:type", String)
], ChatResponseDto.prototype, "intent", void 0);
//# sourceMappingURL=chat.dto.js.map