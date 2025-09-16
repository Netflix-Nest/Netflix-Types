export interface RegisterUser {
  email: string;
  password: string;
  fullName: string;
  role: string;
}

export interface UpdateUserTokenDto {
  refreshToken: string;
  userId: number;
}
