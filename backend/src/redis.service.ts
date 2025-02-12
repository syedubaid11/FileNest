import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { CacheManager } from '@nestjs/cache-manager';

@Injectable()
export class RedisService {
  private cacheManager: Cache;

  constructor(private configService: ConfigService) {
    this.cacheManager = new CacheManager({
      store: redisStore,
      host: this.configService.get<string>('REDIS_HOST') || 'localhost',
      port: this.configService.get<number>('REDIS_PORT') || 6379,
      ttl: 600, // cache time-to-live in seconds
    });
  }

  async set(key: string, value: any, ttl?: number) {
    await this.cacheManager.set(key, value, ttl);
  }

  async get(key: string) {
    return await this.cacheManager.get(key);
  }

  async del(key: string) {
    await this.cacheManager.del(key);
  }
}
