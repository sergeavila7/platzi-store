import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsModule } from './nest/products/products.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './controllers/users/users.service';

@Module({
  imports: [ProductsModule, CategoriesModule, OrdersModule, UsersModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, UsersService],
})
export class AppModule {}
