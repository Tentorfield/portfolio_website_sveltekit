<script>
	import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let { data } = $props();
	const article = $derived(data.article);
</script>

<svelte:head>
	<title>Huy Ngo — {article?.title || 'Missing article'}</title>
</svelte:head>

<div class="articleContainer">
	<div class="article">
		{#if article}
			<h1 class="title">
				<a href={article.url} target="_blank" rel="noreferrer">{article.title}</a>
				<span class="icon"><Fa icon={faExternalLinkAlt} /></span>
			</h1>
			{@html article.body_html}
		{/if}
	</div>
</div>

<style>
	.articleContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		padding: 0;
		margin: 50px 10px 0;
	}
	h1 {
		font-weight: 700;
		text-align: start;
		margin: 0;
	}
	.title {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.article :global(img) {
		max-width: 100%;
	}
	.article {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		padding: 30px;
		width: 100%;
	}
	.icon {
		width: 20px;
		height: 20px;
		display: inline-flex;
		align-items: center;
	}
	.article > h1 > a {
		color: #000;
	}
	@media (min-width: 900px) {
		.article > h1 {
			font-size: 36px;
			margin: 50px 0 0 0;
		}
	}
</style>
