import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  walletAddress: string;

  @IsNotEmpty()
  type: string;
}
