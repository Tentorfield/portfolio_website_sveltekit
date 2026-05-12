<script>
	import projects from '$lib/Projects';
</script>

<svelte:head>
	<title>Huy Ngo — Projects</title>
</svelte:head>

<div class="projectContainer">
	<div class="projects">
		<h1>Projects</h1>
		<p class="note">
			Selected work across applied AI, data engineering, and product. Reach out if you'd like more
			detail on anything.
		</p>
		{#each projects as project}
			<div class="project">
				<div class="header">
					<div class="titleRow">
						<h2>{project.title}</h2>
						{#if project.category}
							<span class="badge">{project.category}</span>
						{/if}
					</div>
					{#if project.company || project.role || project.year}
						<div class="meta">
							{#if project.role}<span>{project.role}</span>{/if}
							{#if project.company}<span>· {project.company}</span>{/if}
							{#if project.year}<span class="year">· {project.year}</span>{/if}
						</div>
					{/if}
				</div>
				<p>{project.description}</p>
				<div class="techs">
					{#each project.technologies as tech}
						<span class="tech">{tech}</span>
					{/each}
				</div>
				{#if project.url}
					<a href={project.url} target="_blank" rel="noreferrer">
						<div class="button">View project →</div>
					</a>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.projectContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
	.note {
		opacity: 0.6;
		margin: 0;
		max-width: 900px;
		text-align: left;
	}
	a {
		text-decoration: none;
	}
	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 24px;
		margin-top: 30px;
		width: 100%;
	}
	h1 {
		font-weight: 700;
		text-align: start;
	}
	h2 {
		display: inline-flex;
		margin: 0;
		font-size: 22px;
	}
	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 12px;
		color: white;
		background: #111;
		padding: 1.5rem 1.75rem;
		width: 100%;
		border-radius: 16px;
		transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		border: 1px solid #1f1f1f;
	}
	.project:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}
	.titleRow {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}
	.badge {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: #ca3c25;
		color: #fff;
		padding: 3px 10px;
		border-radius: 999px;
	}
	.meta {
		font-size: 13px;
		opacity: 0.75;
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
	}
	.meta .year {
		opacity: 0.65;
	}
	.project p {
		font-weight: 300;
		color: #cfd6df;
		margin: 0;
		line-height: 1.6;
	}
	.techs {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.tech {
		font-size: 12px;
		background: #1c1c1c;
		color: #d4d4d4;
		padding: 4px 10px;
		border-radius: 6px;
		border: 1px solid #2a2a2a;
	}
	.button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 1px solid #fff;
		padding: 8px 14px;
		border-radius: 6px;
		font-size: 14px;
		width: fit-content;
		transition: background 0.2s ease;
	}
	.button:hover {
		background: #ca3c25;
		border-color: #ca3c25;
	}
	@media (min-width: 900px) {
		.projectContainer {
			padding: 0;
		}
		.projects > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}
		h2 {
			font-size: 24px;
		}
	}
</style>
