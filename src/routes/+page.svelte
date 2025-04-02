<script>
	import Fa from 'svelte-fa'; // Use default export
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { modalOpened } from '$lib/store';
</script>

<svelte:head>
	<title>Huy Ngo - Main page</title>
</svelte:head>
<main>
	<h1>Hi!✋ <br /> My name is Huy, and I'm a Software Product Engineer 💻 based in California</h1>
	<div class="icons">
		<button
			type="button"
			on:click={() => {
				modalOpened.set(true);
			}}
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
			aria-label="Linkedin"
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
	a {
		color: #007acc; /* Adjusted for better visibility on light background */
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-weight: 700;
	}
	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}
	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}
	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ca3c25; /* Keep hover color for consistency */
	}
	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}
	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
