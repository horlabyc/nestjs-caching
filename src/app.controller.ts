import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

// @UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @CacheKey('some_cache_key')
  @CacheTTL(5)
  @Get()
  async getHello() {
    return this.appService.getHello();
  }
}
