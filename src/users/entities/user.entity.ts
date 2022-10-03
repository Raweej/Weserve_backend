import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'wallet_address', nullable: false, unique: true })
  walletAddress: string;

  @Column({ name: 'type_wallet', nullable: true })
  type: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @OneToMany(() => Order, (order) => order.user_id)
  order: Order;
}
