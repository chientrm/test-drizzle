<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<form method="POST" use:enhance action="?/search">
	<label>
		Search
		<input name="search" required />
	</label>
	<button>Search</button>
</form>

{#if form?.first}
	<section>
		<div>{form?.first.id}</div>
		<div>{form?.first.content}</div>
		<div>{form?.first.createdAt}</div>
	</section>
{/if}

<form method="POST" use:enhance action="?/add">
	<label>
		Content
		<input name="content" required />
	</label>
	<button>Add</button>
</form>

<style>
	form {
		padding: 1em;
	}
</style>
