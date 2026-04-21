import { ChatService } from "./chat.service";
import { ChatRequestDto, ChatResponseDto } from "./dto/chat.dto";
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    chat(body: ChatRequestDto): Promise<ChatResponseDto>;
}
