import { Content } from "./content.interfaces";

export interface Actor {
  id: number;
  fullName: string;
  avatarUrl?: string;
  birthDate?: Date;
  nationality?: string;
  biography?: string;
  contents?: Content[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
