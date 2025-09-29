import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateBookmarkDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  videoId: number;

  @IsNotEmpty()
  timestamp: number;

  @IsOptional()
  note: string;
}
