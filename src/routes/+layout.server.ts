import { Todos } from '$lib/schema';

export const load = async ({ locals }) => {
	const todos = await locals.db.select().from(Todos).all();
	return { todos };
};
