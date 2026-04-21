import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ChatService } from "./chat.service";
import { ChatRequestDto, ChatResponseDto } from "./dto/chat.dto";

@ApiTags("chat")
@Controller("chat")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @ApiOkResponse({ type: ChatResponseDto })
  async chat(@Body() body: ChatRequestDto): Promise<ChatResponseDto> {
    return this.chatService.chat(body.message);
  }
}
