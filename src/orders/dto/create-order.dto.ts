import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  walletAddress: string;
}
