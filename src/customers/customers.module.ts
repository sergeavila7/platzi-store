import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

@Module({ controllers: [CustomerController], providers: [CustomersService] })
export class CustomersModule {}
