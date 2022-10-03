import { IsNotEmpty } from 'class-validator';

export class CreateDetailDto {
  @IsNotEmpty()
  walletAddress: string;

  @IsNotEmpty()
  initAmount: number;

  @IsNotEmpty()
  finalAmount: number;

  @IsNotEmpty()
  tx: string;
}
