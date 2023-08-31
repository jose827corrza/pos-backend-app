import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  getAll() {
    return this.customersService.findAll();
  }

  @Post()
  createCustomer(@Body() payload: CreateCustomerDto) {
    return this.customersService.createNewCustomer(payload);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) customerId: number) {
    this.customersService.findOne(customerId);
  }

  @Put('/:id')
  updateOne(
    @Param('id', ParseIntPipe) customerId: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    this.customersService.updateOne(customerId, payload);
  }

  @Delete('/:id')
  deleteOne(@Param('id', ParseIntPipe) customerId: number) {
    this.customersService.deleteOne(customerId);
  }
}
