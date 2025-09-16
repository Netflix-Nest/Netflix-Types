import { Permission } from "./permission.interfaces";

export interface Role {
  id: number;
  name: string;
  permissions?: Permission[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
