import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
@Injectable()
export class ProductsService {
  private counterId: number = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Bla bla bla',
      price: 122,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(payload: any, id: number) {
    const product = this.findOne(id);

    for (const key in payload) {
      if (key !== 'id') {
        product[key] = payload[key];
      }
    }

    return product;
  }

  delete(id: number) {
    const product = this.findOne(id);
    const productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);

    return product;
  }
}
