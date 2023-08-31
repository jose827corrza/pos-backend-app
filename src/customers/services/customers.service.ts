import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Customer } from '../entities/customers.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { log } from 'console';

@Injectable()
export class CustomersService {
  private customerArray: Array<Customer> = [
    {
      Id: 1015464260,
      NameLastName: 'Daniel Corredor',
      AddressOne: 'Calle 16A Sur N13F-52',
      AddressTwo: '',
      Telephone: 7326919,
      Cellphone: 3059044855,
      Email: 'daniel.customer@gmail.com',
      Department: 'Cundinamarca',
      City: 'Soacha',
      Mayor: '',
    },
  ];

  findAll(): Customer[] {
    return this.customerArray;
  }

  createNewCustomer(newCustomer: CreateCustomerDto): Customer {
    try {
      this.customerArray.push({ ...newCustomer });
      return newCustomer;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  findOne(customerId: number): Customer {
    const product = this.customerArray.find(
      (product) => customerId === product.Id,
    );

    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  updateOne(customerId: number, customerData: UpdateCustomerDto) {
    //   const customerToUpdate = this.findOne(customerId);
    //   const customerIndex = this.customerArray.findIndex(
    //     (customer) => customerToUpdate.Id === customer.Id,
    //   );
    //   this.customerArray[customerIndex] = {
    //     Id: customerToUpdate.Id,
    //     NameLastName: customerData.NameLastName,
    //     ...customerData,
    //   };
    // }
    return `updated customer with #${customerId} and data: ${customerData}`;
  }

  deleteOne(customerId: number) {
    return `deleted ${customerId}`;
  }
}
