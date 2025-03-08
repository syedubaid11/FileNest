import { Module } from '@nestjs/common';
import { DrizzleD1Database } from 'drizzle-orm/d1';
import { db } from './db'; // Ensure `db` is correctly initialized

@Module({
  providers: [
    {
      provide: DrizzleD1Database,
      useValue: db, // Provide the initialized Drizzle instance
    },
  ],
  exports: [DrizzleD1Database], // Export it so other modules can use it
})
export class DatabaseModule {}
