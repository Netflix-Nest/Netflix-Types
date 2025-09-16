import { Role } from "./role.interfaces";

export interface Permission {
  id: number;
  method: string;
  apiPath: string;
  roles?: Role[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
