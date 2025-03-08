import { Injectable, NotFoundException } from '@nestjs/common';
import { DrizzleD1Database } from 'drizzle-orm/d1';
import { db } from 'src/db';
import { usersTable } from '../db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(public readonly drizzle: DrizzleD1Database) {}

  async findById(id: string) {
    const user = await this.drizzle
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, Number(id)))
      .limit(1);
    
    if (!user || user.length === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    return user[0];
  }
  
  async findAll() {
    return await this.drizzle
      .select()
      .from(usersTable);
  }
}