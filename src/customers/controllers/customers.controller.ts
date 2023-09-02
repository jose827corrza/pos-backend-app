import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  InternalServerErrorException,
} from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  getAll() {
    try {
      return this.customersService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Post()
  createCustomer(@Body() payload: CreateCustomerDto) {
    try {
      return this.customersService.createNewCustomer(payload);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) customerId: number) {
    try {
      return this.customersService.findOne(customerId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Put('/:id')
  updateOne(
    @Param('id', ParseIntPipe) customerId: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    try {
      return this.customersService.updateOne(customerId, payload);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Delete('/:id')
  deleteOne(@Param('id', ParseIntPipe) customerId: number) {
    try {
      return this.customersService.deleteOne(customerId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
