import { UserRole } from "../../enum/user.enum";
export declare class CreateUserDto {
    email: string;
    fullName: string;
    username: string;
    password: string;
    role?: UserRole;
    avatar?: string;
    phoneNumber: string;
    viewingTime: number;
    favoriteGenre: number[];
}
