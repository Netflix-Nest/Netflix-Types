export interface RegisterUser {
  email: string;
  password: string;
  fullName: string;
  role: string;
}

export class UpdateUserTokenDto {
  refreshToken: string;
  userId: number;
}
