<script>
	import { goto } from '$app/navigation';
</script>

<button class="button" on:click={() => goto('mailto:huytngo00@gmail.com.com')} aria-label="Send email to huytngo00@gmail.com.com">
	<slot />
</button>

<style>
	.button {
		cursor: pointer;
		height: 40px;
		max-width: 200px;
		border-radius: 10px;
		background: #ca3c25;
		background-size: 150% 150%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
	}
	.button:hover {
		animation: gradient 2s ease infinite;
	}
</style>