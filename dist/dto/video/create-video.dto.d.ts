import { VideoStatus } from "../../enum/video.status";
export declare class CreateVideoDto {
    uploader: number;
    title: string;
    contentId: number;
    episodeNumber: number;
    seasonNumber: number;
    status: VideoStatus;
    originalUrl: string;
    hlsUrl: string;
    fileName: string;
    duration: number;
}
