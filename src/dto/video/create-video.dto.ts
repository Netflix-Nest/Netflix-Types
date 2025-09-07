import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { VideoStatus } from "../../enum/video.status";

export class CreateVideoDto {
  @IsNotEmpty()
  @IsNumber()
  uploader: number;

  @IsNotEmpty()
  @IsNumber()
  contentId: number;

  @IsOptional()
  episodeNumber: number;

  @IsOptional()
  seasonNumber: number;

  @IsOptional()
  status: VideoStatus;

  @IsOptional()
  originalUrl: string;

  @IsOptional()
  hlsUrl: string;

  @IsNotEmpty()
  fileName: string;

  @IsOptional()
  duration: number;
}
