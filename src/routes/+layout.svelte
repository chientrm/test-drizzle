<script lang="ts">
	export let data;
</script>

<h1>Test Drizzle D1 with wrangler-proxy</h1>

<slot />

{#each data.todos as { id, content, createdAt }}
	<section>
		<div>{id}</div>
		<div>{content}</div>
		<div>{createdAt}</div>
	</section>
{/each}

<style>
	section {
		padding: 1em;
	}
</style>
