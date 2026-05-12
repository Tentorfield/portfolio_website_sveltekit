<script>
	import Fa from 'svelte-fa';
	import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { modalOpened } from '$lib/store';
</script>

<svelte:head>
	<title>Huy Ngo — AI Engineer & Data Analyst</title>
	<meta
		name="description"
		content="Huy Ngo — AI Engineer and Data Analyst based in California. Building applied ML, voice agents, and cloud data platforms."
	/>
</svelte:head>

<main>
	<h1>
		Hi!✋<br />
		I'm Huy — an <span class="accent">AI Engineer &amp; Data Analyst</span>
		based in California, building applied ML, voice agents, and cloud data platforms.
	</h1>

	<div class="ctas">
		<a class="cta primary" href="/projects">View Projects</a>
		<a class="cta secondary" href="/Huy_Ngo_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
			<Fa icon={faFileLines} /> Resume
		</a>
	</div>

	<div class="icons">
		<button
			type="button"
			onclick={() => modalOpened.set(true)}
			aria-label="Open contact modal"
			class="icon"
		>
			<Fa icon={faEnvelope} />
		</button>

		<a
			href="https://github.com/Tentorfield"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<Fa icon={faGithub} />
			</div>
		</a>
		<a
			href="https://www.linkedin.com/in/huy-ngo-043206147/"
			aria-label="LinkedIn"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<Fa icon={faLinkedin} />
			</div>
		</a>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 0 16px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
		gap: 32px;
	}
	h1 {
		font-weight: 700;
	}
	main > h1 {
		margin: 50px 10px 0;
		font-size: 28px;
		line-height: 1.4;
		max-width: 760px;
	}
	.accent {
		color: #ca3c25;
		font-weight: 700;
	}
	.ctas {
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.cta {
		padding: 12px 22px;
		border-radius: 8px;
		font-weight: 600;
		font-size: 15px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		transition: transform 0.15s ease, filter 0.15s ease;
	}
	.cta.primary {
		background: #ca3c25;
		color: #fff;
	}
	.cta.secondary {
		background: transparent;
		color: #000;
		border: 1px solid #000;
	}
	.cta:hover {
		transform: translateY(-1px);
		filter: brightness(1.05);
	}
	.icons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 28px;
		font-size: 28px;
		max-width: 240px;
		margin: 8px auto 0;
	}
	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		font-size: inherit;
		color: inherit;
		padding: 0;
	}
	.icon:hover {
		color: #ca3c25;
	}
	@media (min-width: 900px) {
		main > h1 {
			font-size: 40px;
		}
	}
</style>
