import { Content } from "./content.interfaces";

export interface Series {
  id: number;
  totalEpisodes: number;
  seasonNumber: number;
  totalSeasonNumber: number;
  contents?: Content;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
