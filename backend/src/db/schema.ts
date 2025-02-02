import {integer, varchar , pgTable , serial , timestamp , boolean , uuid} from 'drizzle-orm/pg-core'


export const usersTable=pgTable("users",{
    id:integer().primaryKey(),
    name:varchar({length:255}).notNull(),
    email:varchar({length:255}).notNull(),

})

export const FileTable=pgTable("files",{
    id:serial("id").primaryKey(),
    uploadedAt:timestamp().notNull(),
    isPublic:boolean().notNull(),
})

