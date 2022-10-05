import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'detail' })
export class Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', name: 'initAmount', nullable: true })
  initAmount: number;

  @Column({ type: 'decimal', name: 'finalAmount', nullable: true })
  finalAmount: number;

  @Column({ name: 'Tx_hash' })
  tx: string;
}
