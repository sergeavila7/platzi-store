import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const apiKey = this.configService.get<string>('API_KEY');
    const name = this.configService.get('DATABASE_NAME');
    return `Hello World! ${apiKey}${name}`;
  }
}
