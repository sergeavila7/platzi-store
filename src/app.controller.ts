import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHenesllo(): string {
    return 'hola';
  }

  @Get('nuevo')
  newEnpoint(): string {
    return 'yo soy nuevo';
  }

  @Get('products/filter')
  getProductFilter() {
    return `Yo soy un filter`;
  }
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }) {
    return `Product ${productId}, Category ${categoryId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} ${offset} ${brand}`;
  }
}
