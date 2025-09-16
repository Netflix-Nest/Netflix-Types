import { Content } from "./content.interfaces";

export interface Tag {
  id: number;
  name: string;
  contents?: Content[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
