import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return { message: `products limit=> ${limit} ${offset} ${brand}` };
  }
  @Get('filter')
  getProductFilter() {
    return { message: `Yo soy un filter` };
  }
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return { message: `product ${productId}` };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
