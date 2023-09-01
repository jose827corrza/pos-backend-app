import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: 'bigint' })
  documentId: number;

  @Column({ type: 'varchar', length: 120 })
  nameLastname: string;

  @Column({ type: 'varchar', length: 160 })
  mainAddress: string;

  @Column({ type: 'varchar', length: 160 })
  optionalAddress: string;

  @Column({ type: 'bigint' })
  phoneNumber: number;

  @Column({ type: 'bigint' })
  mobile: number;

  @Column({ unique: true })
  email: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  mayor: string;
}
