import { Content } from "./content.interfaces";

export class Series {
  id: number;
  totalEpisodes: number;
  seasonNumber: number;
  totalSeasonNumber: number;
  contents?: Content;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
