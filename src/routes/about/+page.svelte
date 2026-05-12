<script>
	import skills from '$lib/Skills'
</script>

<svelte:head>
	<title>Huy Ngo — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			I'm an <strong>AI Engineer &amp; Data Analyst</strong> based in California, with a background in
			Business Economics and Computer Science (UC Riverside). I currently work as a Data Analyst at
			<strong>Innova Electronics Corporation</strong>, where I build cloud data pipelines on
			AWS + Snowflake, ship predictive ML models, and deliver an internal natural-language analytics
			chatbot powered by Snowflake Cortex Analyst.
		</p>
		<p>
			Outside of Innova I run <strong>EnEns LLC</strong>, a single-member California LLC focused on
			applied AI engineering and data consulting. Recent work includes a trilingual
			(English / Vietnamese / Spanish) production AI phone receptionist built on the OpenAI Realtime API
			and Twilio for a physical therapy clinic, and an AI-driven decision-support &amp; logistics POC
			for an enterprise purchasing department.
		</p>
		<p>
			Previously I spent three years as a Software Product Engineer driving product strategy for
			diagnostic platforms used by 1M+ installs and 40k+ active devices. That product foundation
			now powers everything I build on the data and AI side.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}
	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}
	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}
	h2 {
		margin-top: 50px;
	}
	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>