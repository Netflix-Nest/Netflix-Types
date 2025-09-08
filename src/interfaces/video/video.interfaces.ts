import { Content } from "./content.interfaces";

export class Video {
  id: number;
  episodeNumber?: number;
  seasonNumber?: number;
  contents?: Content;
  uploader: number;
  status: string;
  originalUrl?: string;
  hlsUrl?: string;
  fileName?: string;
  duration?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
