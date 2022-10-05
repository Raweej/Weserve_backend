import { Detail } from 'src/detail/entities/detail.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.order, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @OneToOne(() => Detail, { eager: true })
  @JoinColumn({ name: 'detail_id' })
  detail: Detail;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
