import { Content } from "./content.interfaces";

export interface Genre {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
  contents?: Content[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
