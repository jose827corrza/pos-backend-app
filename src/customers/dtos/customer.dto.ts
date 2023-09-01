import { PartialType } from '@nestjs/mapped-types';
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
  readonly documentId: number;

  @IsString()
  @IsNotEmpty()
  readonly nameLastname: string;

  @IsString()
  @IsOptional()
  readonly mainAddress: string;

  @IsOptional()
  @IsString()
  readonly optionalAddress: string;

  @IsOptional()
  @IsPositive()
  readonly phoneNumber: number;

  @IsPositive()
  @IsNotEmpty()
  readonly mobile: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly state: string;

  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @IsString()
  readonly mayor: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
