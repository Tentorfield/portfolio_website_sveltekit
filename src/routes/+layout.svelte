<script>
	import Navbar from '$lib/components/NavBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { faCopy } from '@fortawesome/free-solid-svg-icons'; // Correct import
	import Fa from 'svelte-fa'; // Use default export
	import Tooltip from '$lib/components/Tooltip.svelte';
	import CopyClipBoard from '$lib/components/CopyToClipBoard.svelte';
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	export const customBackground = writable('#ffffff'); // Set default to light background

	import routes from '$lib/NavRoutes';
	let copied = false;
	let email = 'huytngo00@gmail.com';
	const cookieEnabled = false;
	$: showCookieModal = false;
	const cssVariables = (node, variables) => {
		setCssVariables(node, variables);
		return {
			update(variables) {
				setCssVariables(node, variables);
			}
		};
	};
	const setCssVariables = (node, variables) => {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	};
	const copy = () => {
		const app = new CopyClipBoard({
			target: document.getElementById('clipboard'),
			props: { email }
		});
		app.$destroy();
	};
	onMount(() => {
		const showCookie = localStorage.getItem('showCookieModal');
		if (showCookie !== null) showCookieModal = JSON.parse(showCookie);
		else showCookieModal = true;
	});
	// beforeNavigate(({ to }) => {
	// 	const pathName = to.pathname;
	// 	const route = routes.find((route) => pathName === route.href);
	// 	if (!route.customColor) {
	// 		customBackground.set('#0a0908');
	// 	} else customBackground.set(route.customColor);
	// 	});
</script>

<svelte:body use:cssVariables={{ background: $customBackground }} />

{#if showCookieModal && cookieEnabled}
	<div class="cookieContainer">
		<p>🍪 This website use <a href="privacy-policy">Cookies.</a></p>
		<button
			type="button"
			aria-label="Close cookie consent"
			on:click={() => {
				showCookieModal = false;
				localStorage.setItem('showCookieModal', false);
			}}
			style="background: none; border: none; cursor: pointer; font-size: inherit;"
		>
			&#10005;
		</button>
	</div>
{/if}

<Modal>
	<div slot="content" class="modalContainer">
		<h1>Email:</h1>
		<div>
			<p>{email}</p>
			&nbsp;
			<div class="tooltip">
				<Tooltip tooltip={copied ? 'Copied' : 'Copy'}>
					<button
						id="clipboard"
						aria-label="Copy email to clipboard"
						on:click={() => {
							copied = true;
							copy();
							setTimeout(() => {
								copied = false;
							}, 500);
						}}
						style="background: none; border: none; cursor: pointer; padding: 0;"
					>
						<Fa icon={faCopy} />
					</button>
				</Tooltip>
			</div>
		</div>
		<Button>Send Email</Button>
	</div>
</Modal>
<Navbar segment={$page.url.pathname} />

<slot />

<footer>
	Created by <a class="me" href="/about">Tentorfield</a> ❤️ with
	<span class="svelte">Svelte</span>
</footer>

<style>
	* {
		box-sizing: border-box;
	}
	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}
	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: #ffffff; /* Changed to light background */
		color: #000000; /* Changed to dark text */
	}
	:global(body) {
		background-color: var(--background, #ffffff); /* Ensure fallback is light */
		background-size: 200% 200%;
		color: #000000; /* Changed to dark text */
		margin: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		line-height: 1.75;
		place-items: center;
		height: 100%;
		overflow-x: hidden;
	}
	footer {
		font-size: 16px;
		font-weight: 400;
		padding: 30px 0;
		max-width: 900px;
		text-align: center;
		width: 100%;
		margin-top: auto; /* Push footer to the bottom */
	}
	:global(h1) {
		border: 0;
	}
	:global(::selection) {
		color: #000;
		background: #ca3c25; /* Adjusted for better contrast */
	}
	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}
	:global(::-webkit-scrollbar-thumb) {
		background-color: #fff;
		border-radius: 3px;
	}
	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}
	@media (min-width: 900px) {
		:global(body) {
			padding: 0 100px;
		}
	}
	:global(a) {
		text-decoration: none;
	}
	:global(a) {
		text-decoration: none;
	}
	a {
		color: rgb(0, 100, 200);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:visited {
		color: rgb(0, 80, 160);
	}
	.modalContainer div {
		display: flex;
		margin-bottom: 20px;
	}
	.modalContainer p {
		margin: 0;
	}
	:global(.tooltip) {
		visibility: hidden;
	}
	.cookieContainer {
		background: white;
		border-radius: 0px;
		text-align: center;
		width: 100%;
		height: 30px;
		color: black;
		padding: 30px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: fixed;
		bottom: 0px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}
	.cookieContainer > p > a {
		text-decoration: underline;
	}
	/* Removed unused selector */
	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}
	}
	@media (min-width: 600px) {
		.cookieContainer {
			background: white;
			border-radius: 50px;
			text-align: center;
			width: 350px;
			height: 30px;
			color: black;
			padding: 0 10px;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			position: fixed;
			bottom: 50px;
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>