<script>
	import Navbar from '$lib/components/NavBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Tooltip from '$lib/components/Tooltip.svelte';
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';

	let { children } = $props();

	const email = 'huytngo00@gmail.com';
	let copied = $state(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
			setTimeout(() => (copied = false), 1200);
		} catch (err) {
			console.warn('Clipboard write failed', err);
		}
	}
</script>

<Modal>
	{#snippet content()}
		<div class="modalContainer">
			<h1>Email</h1>
			<div class="emailRow">
				<p>{email}</p>
				<Tooltip tooltip={copied ? 'Copied' : 'Copy'}>
					<button
						class="copyBtn"
						aria-label="Copy email to clipboard"
						onclick={copy}
					>
						<Fa icon={copied ? faCheck : faCopy} />
					</button>
				</Tooltip>
			</div>
			<Button>Send Email</Button>
		</div>
	{/snippet}
</Modal>

<Navbar segment={$page.url.pathname} />

{@render children?.()}

<footer>
	Built by <a class="me" href="/about">Huy Ngo</a> with
	<span class="svelte">Svelte 5</span>
</footer>

<style>
	* {
		box-sizing: border-box;
	}
	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	:global(html) {
		scrollbar-gutter: stable;
		overflow-y: scroll;
	}
	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		font-family: 'Fira Code', monospace;
		background-color: #ffffff;
		color: #000000;
	}
	:global(body) {
		margin: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		line-height: 1.75;
		place-items: center;
		overflow-x: hidden;
	}
	footer {
		font-size: 14px;
		font-weight: 400;
		padding: 30px 0;
		max-width: 900px;
		text-align: center;
		width: 100%;
		margin-top: auto;
		opacity: 0.7;
	}
	footer .svelte {
		color: #ca3c25;
		font-weight: 600;
	}
	:global(h1) {
		border: 0;
	}
	:global(::selection) {
		color: #fff;
		background: #ca3c25;
	}
	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
	}
	:global(::-webkit-scrollbar-thumb) {
		background-color: #ddd;
		border-radius: 3px;
	}
	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
	}
	@media (min-width: 900px) {
		:global(body) {
			padding: 0 100px;
		}
	}
	:global(a) {
		text-decoration: none;
	}
	a {
		color: #007acc;
	}
	a:hover {
		text-decoration: underline;
	}
	a:visited {
		color: #007acc;
	}
	.modalContainer {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.modalContainer h1 {
		margin: 0;
		font-size: 24px;
	}
	.emailRow {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.emailRow p {
		margin: 0;
		font-size: 16px;
	}
	.copyBtn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		font-size: 18px;
		color: inherit;
	}
	:global(.tooltip) {
		visibility: hidden;
	}
	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}
	}
</style>
