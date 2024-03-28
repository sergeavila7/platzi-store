import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './categories/controllers/categories.controller';
import { BrandsController } from './brands/controllers/brands.controller';
import { CustomerController } from './customers/controllers/customers.controller';
import { UsersController } from './users/controllers/users.controller';
import { ProductsService } from './products/services/products.service';
import { CategoriesService } from './categories/services/categories.service';
import { BrandsService } from './brands/services/brands.service';
import { CustomersService } from './customers/services/customers.service';
import { UsersService } from './users/services/users.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    CategoriesModule,
    CustomersModule,
    BrandsModule,
  ],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    CustomerController,
    UsersController,
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    BrandsService,
    CustomersService,
    UsersService,
  ],
})
export class AppModule {}
