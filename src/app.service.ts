import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
  async getHello() {
    this.cacheManager.set('cached_item', { name: 'Sulaiman' });
    const cache = await this.cacheManager.get('cached_item');
    console.log({ cache });
    return 'Hello World!';
  }
}
