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

//friends table
export const friendsTable = pgTable("friends", {
    id: serial("id").primaryKey(),
    userId: integer().notNull(), // Foreign key to users table
    friendId: integer().notNull(), // Foreign key to users table
    createdAt: timestamp().notNull().defaultNow(),
});



