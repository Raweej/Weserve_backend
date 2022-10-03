import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'detail' })
export class Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'initAmount' })
  initAmount: number;

  @Column({ name: 'finalAmount' })
  finalAmount: number;

  @Column({ name: 'Tx_hash' })
  tx: string;
}
