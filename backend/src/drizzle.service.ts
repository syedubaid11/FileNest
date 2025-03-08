import { Inject, Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { db } from "./db";
import { usersTable } from "./db/schema";
@Injectable()
export class UsersService {
  constructor(@Inject("DATABASE") private db) {}

  async findAll() {
    return await this.db.select().from(usersTable);
  }

  async createUser(name: string, email: string) {
    await this.db.insert(usersTable).values({ name, email });
  }

  async findUserByEmail(email: string) {
    return await this.db.select().from(usersTable).where(eq(usersTable.email, email));
  }
}
