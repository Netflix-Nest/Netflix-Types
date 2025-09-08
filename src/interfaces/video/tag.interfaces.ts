import { Content } from "./content.interfaces";

export class Tag {
  id: number;
  name: string;
  contents?: Content[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
