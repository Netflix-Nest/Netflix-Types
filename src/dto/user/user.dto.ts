import { IsNotEmpty, IsString } from "class-validator";

export class ChangePassDto {
  @IsNotEmpty()
  @IsString()
  oldPass: string;
  @IsNotEmpty()
  @IsString()
  newPass: string;
}
