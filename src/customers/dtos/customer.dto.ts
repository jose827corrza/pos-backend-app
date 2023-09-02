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
  readonly mainAddress: string;

  @IsOptional()
  @IsString()
  readonly optionalAddress: string;

  @IsOptional()
  @IsPositive()
  readonly phoneNumber: number;

  @IsOptional()
  @IsPositive()
  readonly mobile: number;

  @IsEmail()
  @IsOptional()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @IsOptional()
  readonly mayor: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
