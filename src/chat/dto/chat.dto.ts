import { ApiProperty } from "@nestjs/swagger";

export class ChatRequestDto {
  @ApiProperty({ example: "What is the customer phone number?" })
  message: string;
}

export class ChatResponseDto {
  @ApiProperty({ example: "The customer phone number is +1 555-123-4567." })
  answer: string;

  @ApiProperty({ example: "customerDetails", enum: ["customerDetails", "companyDetails", "unsupported"] })
  intent: string;
}
