import { IsNotEmpty, IsOptional } from "class-validator";

export class AddHistoryDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  videoId: number;

  @IsNotEmpty()
  watchedAt: Date;

  @IsNotEmpty()
  duration: number;

  @IsOptional()
  deviceInfo: string;
}
