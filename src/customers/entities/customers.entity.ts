import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ unique: true, type: 'bigint' })
  @ApiProperty()
  documentId: number;

  @Column({ type: 'varchar', length: 120 })
  @ApiProperty()
  nameLastname: string;

  @Column({ type: 'varchar', length: 160 })
  @ApiProperty()
  mainAddress: string;

  @Column({ type: 'varchar', length: 160 })
  @ApiProperty()
  optionalAddress: string;

  @Column({ type: 'bigint' })
  @ApiProperty()
  phoneNumber: number;

  @Column({ type: 'bigint' })
  @ApiProperty()
  mobile: number;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  state: string;

  @Column()
  @ApiProperty()
  city: string;

  @Column()
  @ApiProperty()
  mayor: string;
}
