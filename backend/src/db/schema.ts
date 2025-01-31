import {integer, varchar , pgTable} from 'drizzle-orm/pg-core'


export const usersTable=pgTable("users",{
    id:integer().primaryKey(),
    name:varchar({length:255}).notNull(),
    age:integer().notNull()


})
