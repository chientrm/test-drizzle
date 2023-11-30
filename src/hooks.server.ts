import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/d1';
import { connectD1 } from 'wrangler-proxy';
import * as schema from '$lib/schema';

export const handle = (async ({ event, resolve }) => {
	if (!building) {
		event.locals.db = drizzle(event.platform?.env.D1 ?? connectD1('D1'), { schema });
	}
	return resolve(event);
}) satisfies Handle;
