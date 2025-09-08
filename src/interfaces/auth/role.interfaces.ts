import { Permission } from "./permission.interfaces";

export class Role {
  id: number;
  name: string;
  permissions?: Permission[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
