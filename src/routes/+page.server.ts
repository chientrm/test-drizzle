import { Todos } from '$lib/schema.js';
import { validate } from '$lib/validate';
import { string } from 'yup';

export const actions = {
	add: async ({ request, locals }) => {
		const { content } = await validate(request, {
			content: string().required()
		});
		await locals.db.insert(Todos).values({ content });
	},
	search: async ({ locals }) => {
		const first = await locals.db.query.Todos.findFirst({ orderBy: Todos.createdAt });
		return { first };
	}
};
