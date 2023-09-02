import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly documentId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nameLastname: string;

  @IsString()
  @ApiProperty()
  readonly mainAddress: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly optionalAddress: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly phoneNumber: number;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly mobile: number;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly state: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly city: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly mayor: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
