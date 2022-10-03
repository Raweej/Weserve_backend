import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  user_id: User;
}
