import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customers.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  // private customerArray: Array<Customer> = [
  //   {
  //     documentId: 1015464260,
  //     nameLastname: 'Daniel Corredor',
  //     mainAddress: 'Calle 16A Sur N13F-52',
  //     optionalAddress: '',
  //     phoneNumber: 7326919,
  //     mobile: 3059044855,
  //     email: 'daniel.customer@gmail.com',
  //     state: 'Cundinamarca',
  //     city: 'Soacha',
  //     mayor: '',
  //   },
  // ];

  findAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }

  async createNewCustomer(data: CreateCustomerDto): Promise<Customer> {
    const newCustomer = this.customersRepository.create(data);
    return await this.customersRepository.save(newCustomer);
  }

  async findOne(documentId: number): Promise<Customer> {
    const customer = await this.customersRepository.findOne({ documentId });

    if (!customer) {
      throw new NotFoundException();
    }
    return customer;
  }

  async updateOne(
    documentId: number,
    changes: UpdateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.customersRepository.findOne({ documentId });
    if (!customer) {
      throw new NotFoundException();
    }
    this.customersRepository.merge(customer, changes);
    return await this.customersRepository.save(customer);
  }

  async deleteOne(documentId: number): Promise<{ message: string }> {
    const customer = await this.customersRepository.findOne({ documentId });
    if (!customer) {
      throw new NotFoundException();
    }
    await this.customersRepository.delete(customer.id);
    return { message: `Customer #${documentId} deleted` };
  }
}
