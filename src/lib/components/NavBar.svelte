<script>
	import Burger from './Hamburger.svelte';
	import routes from '$lib/NavRoutes';

	let { segment } = $props();
	let opened = $state(false);
</script>

<header class="navbar" class:open={opened}>
	<div class="navbar-inner">
		<a class="brand" href="/" aria-label="Huy Ngo — Home" onclick={() => (opened = false)}>
			<span class="brand-mark">HN</span>
			<span class="brand-name">Huy Ngo</span>
		</a>

		<nav class="nav-buttons desktop">
			{#each routes as route}
				{#if route.external}
					<a class="button" href={route.href} target="_blank" rel="noopener noreferrer">
						{route.label}
					</a>
				{:else}
					<a
						class={`button ${segment === route.href ? 'selected' : ''}`}
						href={route.href}
					>
						{route.label}
					</a>
				{/if}
			{/each}
		</nav>

		<div class="burger">
			<Burger bind:open={opened} />
		</div>
	</div>

	{#if opened}
		<nav class="nav-buttons mobile">
			{#each routes as route}
				{#if route.external}
					<a class="button" href={route.href} target="_blank" rel="noopener noreferrer" onclick={() => (opened = false)}>
						{route.label}
					</a>
				{:else}
					<a
						class={`button ${segment === route.href ? 'selected' : ''}`}
						href={route.href}
						onclick={() => (opened = false)}
					>
						{route.label}
					</a>
				{/if}
			{/each}
		</nav>
	{/if}
</header>

<style>
	.navbar {
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
		z-index: 10;
		box-sizing: border-box;
		transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	/* Inner row that holds brand + nav + burger */
	.navbar-inner {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 64px;
		padding: 0 20px;
		box-sizing: border-box;
		width: 100%;
	}

	/* Brand on the left */
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		color: #000;
		font-weight: 600;
		font-size: 16px;
		text-decoration: none;
		line-height: 1;
		flex-shrink: 0;
	}
	.brand-mark {
		background: #ca3c25;
		color: #fff;
		width: 32px;
		height: 32px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.5px;
		flex-shrink: 0;
	}
	.brand-name {
		display: inline-block;
	}

	/* Desktop nav buttons on the right */
	.nav-buttons.desktop {
		display: none;
		align-items: center;
		gap: 8px;
	}
	.button {
		position: relative;
		padding: 8px 12px;
		color: #007acc;
		text-decoration: none;
		font-weight: 500;
		font-size: 15px;
		line-height: 1;
		transition: color 0.15s ease-in-out;
		white-space: nowrap;
	}
	.button:hover {
		color: #ca3c25;
	}
	/* Underline indicator — uses border so it doesn't change layout */
	.button::after {
		content: '';
		position: absolute;
		left: 12px;
		right: 12px;
		bottom: 2px;
		height: 2px;
		background: transparent;
		transition: background 0.15s ease-in-out;
	}
	.button:hover::after,
	.button.selected::after {
		background: #ca3c25;
	}
	.button.selected {
		color: #000;
	}

	/* Mobile burger */
	.burger {
		display: inline-flex;
		align-items: center;
	}

	/* Mobile menu (collapsed by default) */
	.nav-buttons.mobile {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 10px 20px 20px;
		border-top: 1px solid #f0f0f0;
		animation: dropDown 0.2s ease-out;
	}
	.nav-buttons.mobile .button {
		padding: 10px 12px;
		font-size: 16px;
	}
	@keyframes dropDown {
		from { opacity: 0; transform: translateY(-4px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Desktop breakpoint — show inline nav, hide burger */
	@media (min-width: 720px) {
		.nav-buttons.desktop {
			display: inline-flex;
		}
		.burger {
			display: none;
		}
		.nav-buttons.mobile {
			display: none !important;
		}
	}
</style>
