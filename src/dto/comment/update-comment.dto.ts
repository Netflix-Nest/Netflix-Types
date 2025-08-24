import { IsNotEmpty } from "class-validator";

export class UpdateCommentDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  content: string;
}
