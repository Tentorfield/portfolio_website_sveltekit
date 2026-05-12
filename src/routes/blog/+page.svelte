<script>
	let { data } = $props();
	const blackListedArticles = [422939];
	const articles = $derived(
		(data?.devToArticles ?? []).filter(
			(article) => !blackListedArticles.includes(article?.id)
		)
	);
</script>

<svelte:head>
	<title>Huy Ngo — Blog</title>
</svelte:head>

<div class="container">
	<section class="articlesContainer">
		<div class="articles">
			<h1>Blog</h1>
			<p class="note">
				Writing on applied AI, data engineering, and the occasional product post. Looking for my
				resume? <a class="inline-link" href="/Huy_Ngo_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">Download it here (PDF)</a>.
			</p>
			{#each articles as article}
				<div class="article">
					<div class="header">
						<h2>{article.title}</h2>
						<div class="tags">Tags: {article.tags || article.category}</div>
					</div>
					<p>{article.description || 'No description available.'}</p>
					<a
						href={article.id ? `/blog/${article.id}` : article.link}
						target={!article.id ? '_blank' : '_self'}
						rel={!article.id ? 'noopener noreferrer' : undefined}
					>
						<div class="button">Read More →</div>
					</a>
				</div>
			{/each}
			{#if articles.length === 0}
				<div class="no-articles">
					<h2>No Articles Yet</h2>
					<p>I'm cooking some posts on AI voice agents and Snowflake Cortex. Check back soon!</p>
				</div>
			{/if}
		</div>
	</section>
</div>

<style>
	.container {
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		padding: 24px 20px;
		box-sizing: border-box;
	}
	.note {
		opacity: 0.7;
		margin: 0 0 1em 0;
	}
	.inline-link {
		color: #ca3c25;
		font-weight: 600;
	}
	.articlesContainer .articles {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 24px;
		margin-top: 30px;
	}
	.article {
		background: #111;
		color: white;
		padding: 1.75rem;
		border-radius: 16px;
		transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.article:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}
	.article h2 {
		margin: 0;
		font-size: 22px;
	}
	.tags {
		font-size: 12px;
		opacity: 0.7;
	}
	.article p {
		color: #cfd6df;
		margin: 0;
	}
	.button {
		display: inline-flex;
		padding: 8px 14px;
		border: 1px solid white;
		color: white;
		border-radius: 6px;
		font-size: 14px;
		width: fit-content;
		transition: background 0.2s ease;
	}
	.button:hover {
		background: #ca3c25;
		border-color: #ca3c25;
	}
	.no-articles {
		text-align: center;
		color: #666;
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 10px;
		margin-top: 2rem;
	}
	.no-articles h2 {
		color: #333;
	}
</style>
