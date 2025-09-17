import { StatusUser, UserRole } from "../../enum/user.enum";
import { Genre } from "../video/genre.interfaces";

export interface User {
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

export type UserProfile = Omit<
  User,
  "password" | "refreshToken" | "favoriteGenre"
> & {
  favoriteGenre: Genre[];
};

export interface UserMention {
  id: number;
  username: string;
  fullName: string;
  avatar: string;
}
