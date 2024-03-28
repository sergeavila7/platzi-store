import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from 'src/categories/controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from 'src/categories/services/categories.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService, CategoriesService],
})
export class ProductsModule {}
