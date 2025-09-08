import { StatusUser, UserRole } from "../../enum/user.enum";

export class User {
  id: number;
  email: string;
  username: string;
  fullName: string;
  password: string;
  viewingTime: number;
  phoneNumber: string;
  refreshToken: string;
  role: UserRole;
  avatar: string;
  status: StatusUser;
  favoriteGenre: number[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
