import { Injectable } from '@nestjs/common';
import { DrizzleD1Database } from 'drizzle-orm/d1';
import { db } from 'src/db';
import { usersTable } from '../db/schema'


@Injectable()
export class UsersService {
    constructor(private readonly drizzle: DrizzleD1Database) {} 
    
    
    async findByid(id: string):Promise<string> {
        const user=await this.drizzle.query.usersTable.findFirst({
            
        })

        throw new Error('Method not implemented.');
    }
}
