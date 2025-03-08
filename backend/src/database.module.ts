import { Module } from '@nestjs/common';
import { DrizzleD1Database } from 'drizzle-orm/d1';
import { db } from './db'; 


@Module({
  providers: [
    {
      provide: DrizzleD1Database,
      useValue: db, 
    },
  ],
  exports: [DrizzleD1Database], 
})
export class DatabaseModule {}
