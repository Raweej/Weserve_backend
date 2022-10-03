import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'detail' })
export class Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'initAmount' })
  initAmount: string;

  @Column({ name: 'finalAmount' })
  finalAmount: string;

  @Column({ name: 'Tx_hash' })
  tx: string;
}
