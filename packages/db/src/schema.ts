import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const books = pgTable("books", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    author: varchar({ length: 255 }).notNull(),
    genre: varchar({ length: 255 }).notNull(),
    year: integer().notNull()
});

export type Book = typeof books.$inferSelect
export type NewBook = typeof books.$inferInsert