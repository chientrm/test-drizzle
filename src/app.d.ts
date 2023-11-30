// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import * as Schema from '$lib/schema';
declare global {
	namespace App {
		interface Locals {
			db: DrizzleD1Database<typeof Schema>;
		}
		interface Platform {
			env: {
				D1: D1Database;
			};
		}
	}
}

export {};
