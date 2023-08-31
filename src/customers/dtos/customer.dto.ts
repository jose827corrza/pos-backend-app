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
  readonly Id: number;

  @IsString()
  @IsNotEmpty()
  readonly NameLastName: string;

  @IsString()
  @IsOptional()
  readonly AddressOne: string;

  @IsOptional()
  @IsString()
  readonly AddressTwo: string;

  @IsOptional()
  @IsPositive()
  readonly Telephone: number;

  @IsPositive()
  @IsNotEmpty()
  readonly Cellphone: number;

  @IsEmail()
  @IsNotEmpty()
  readonly Email: string;

  @IsNotEmpty()
  @IsString()
  readonly Department: string;

  @IsNotEmpty()
  @IsString()
  readonly City: string;

  @IsString()
  readonly Mayor: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
