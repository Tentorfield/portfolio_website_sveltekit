<script>
	import Burger from './Hamburger.svelte';
	// import Logo from '/images/dragon-icon.svg';
	import routes from '$lib/NavRoutes';
	let opened = false;
	export let segment;
</script>

<div class={opened ? 'NavBar open' : 'NavBar'}>
	<div class="innerContainer">
		<!-- <a href="/">
			<img src={Logo} alt="logo" class="logo" />
		</a> -->
		<div class="burger">
			<Burger bind:open={opened} />
		</div>
		<div class="buttons">
			{#each routes as route}
				<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}
					>{route.label}</a
				>
			{/each}
		</div>
	</div>
	<div class="responsiveButtons buttons">
		{#each routes as route}
			<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}
				>{route.label}</a
			>
		{/each}
	</div>
</div>

<style>
	/* :global(.logo) {
		cursor: pointer;
		height: 30px;
		width: 30px;
		color: #fff;
	} */
	.open {
		flex-direction: column !important;
		align-items: center !important;
		height: 330px !important;
		transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
	.selected {
		position: relative;
		color: #000;
	}
	.button:hover::after {
		content: '';
		background: #ca3c25;
		display: block;
		height: 3px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	.button.selected:after {
		content: '';
		background: #ca3c25;
		display: block;
		height: 3px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	.innerContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 900px;
		box-sizing: border-box;
	}
	.innerContainer :global(a) {
		height: 30px;
		color: #000;
	}
	.NavBar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 900px;
		box-sizing: border-box;
		padding: 20px;
		height: 80px;
		overflow: hidden;
		transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		background-color: #ffffff; /* Ensure background is visible */
		z-index: 10; /* Ensure it appears above other elements */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
	}
	.buttons {
		display: none;
		justify-content: space-between;
		align-items: center;
		font-weight: 500;
	}
	.responsiveButtons {
		margin-top: 20px;
		width: 100%;
		display: flex !important;
		flex-direction: column;
	}
	.responsiveButtons .button {
		max-width: 100px;
		width: 100%;
		text-align: center;
	}
	.buttons .button {
		padding: 0;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		text-decoration: none;
		position: relative;
		margin: 10px;
		color: #007acc; /* Adjusted for better visibility */
	}
	.button.selected {
		color: #000;
	}
	.burger :global(button) {
		margin: 0;
	}
	@media (min-width: 900px) {
		.NavBar {
			padding: 20px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			max-width: 900px;
			margin: 0 auto;
		}
		.buttons {
			display: flex;
		}
		.NavBar .burger {
			display: none !important;
		}
		.responsiveButtons {
			display: none !important;
		}
	}
</style>