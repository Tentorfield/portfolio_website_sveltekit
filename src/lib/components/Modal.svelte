<script>
	import { modalOpened } from '$lib/store.js';

	let { content } = $props();

	let isOpen = $state(false);
	let closing = $state(false);

	modalOpened.subscribe((value) => {
		closing = false;
		isOpen = value;
	});

	function close() {
		closing = true;
		setTimeout(() => {
			modalOpened.set(false);
		}, 300);
	}

	function onKey(e) {
		if (e.key === 'Escape') close();
	}
</script>

<svelte:window onkeydown={onKey} />

{#if isOpen}
	<div class={`modal ${closing ? 'closing' : ''}`}>
		<button
			type="button"
			class="backdrop"
			aria-label="Close modal"
			onclick={close}
		></button>
		<div class="content-wrapper">
			<div class="content">
				{@render content?.()}
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100vh;
		z-index: 2000;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@keyframes slidein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.backdrop {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		border: none;
		cursor: pointer;
		animation: slidein 0.3s ease-in-out;
	}
	@keyframes openModalAnimation {
		from {
			opacity: 0;
			transform: scale(0);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	.content-wrapper {
		z-index: 10;
		max-width: 70vw;
		overflow: hidden;
		padding: 30px;
		border-radius: 25px;
		background: linear-gradient(155deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.65));
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);
		box-shadow: 2px 4px 24px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(0, 0, 0, 0.05);
		animation: openModalAnimation 0.3s ease-in-out;
	}
	@keyframes slideOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@keyframes closeModalAnimation {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0;
			transform: scale(0);
		}
	}
	.closing .backdrop {
		animation: slideOut 0.3s ease-in-out;
	}
	.closing .content-wrapper {
		animation: closeModalAnimation 0.3s ease-in-out;
	}
	.content {
		max-height: 70vh;
		overflow: auto;
	}
	@media (min-width: 900px) {
		.content-wrapper {
			padding: 50px;
			min-width: 400px;
		}
	}
</style>
