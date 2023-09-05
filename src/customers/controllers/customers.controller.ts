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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Controller('customers')
@ApiTags('Customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all the customers' })
  getAll() {
    try {
      return this.customersService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Post()
  @ApiOperation({ summary: 'Creates a new Customer' })
  createCustomer(@Body() payload: CreateCustomerDto) {
    try {
      return this.customersService.createNewCustomer(payload);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one specific customer with their identification',
  })
  getOne(@Param('id', ParseIntPipe) customerId: number) {
    try {
      return this.customersService.findOne(customerId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update  information about one customer' })
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
  @ApiOperation({ summary: 'Deletes a customer registry' })
  deleteOne(@Param('id', ParseIntPipe) customerId: number) {
    try {
      return this.customersService.deleteOne(customerId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
