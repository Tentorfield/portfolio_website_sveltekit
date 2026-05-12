<script>
	let { children, href = 'mailto:huytngo00@gmail.com' } = $props();
</script>

<a class="button" {href} aria-label="Send email">
	{@render children?.()}
</a>

<style>
	.button {
		cursor: pointer;
		height: 40px;
		max-width: 200px;
		border-radius: 10px;
		background: #ca3c25;
		color: #fff;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		text-decoration: none;
		padding: 0 16px;
		transition: filter 0.2s ease, transform 0.2s ease;
	}
	.button:hover {
		filter: brightness(1.05);
		transform: translateY(-1px);
	}
</style>
