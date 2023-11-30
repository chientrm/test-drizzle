import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const Todos = sqliteTable('todos', {
	id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
	content: text('content').notNull(),
	createdAt: text('createdAt')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
});
