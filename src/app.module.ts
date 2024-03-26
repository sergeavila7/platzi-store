import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { CustomersModule } from './customers/customers.module';
import { BrandsModule } from './brands/brands.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    OrdersModule,
    UsersModule,
    CustomersModule,
    BrandsModule,
  ],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, UsersService, ProductsService],
})
export class AppModule {}
