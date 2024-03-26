import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsModule } from './nest/products/products.module';
import { ProductsModule } from './controllers/products/products.module';
import { CategoriesModule } from './controllers/categories/categories.module';
import { OrdersModule } from './controllers/orders/orders.module';

@Module({
  imports: [ProductsModule, CategoriesModule, OrdersModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService],
})
export class AppModule {}
