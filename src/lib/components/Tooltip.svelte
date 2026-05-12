<script>
	let { tooltip = false, children } = $props();
</script>

<div data-tooltip={tooltip} class="container">
	{@render children?.()}
</div>

<style>
	.container {
		width: auto;
		height: auto;
		z-index: 200;
		display: inline-block;
	}
	[data-tooltip] {
		position: relative;
		z-index: 2;
		display: block;
	}
	[data-tooltip]:before,
	[data-tooltip]:after {
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		transition: 0.2s ease-out;
		transform: translate(-50%, 5px);
	}
	[data-tooltip]:before {
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-bottom: 5px;
		padding: 6px 10px;
		min-width: 70px;
		max-width: 250px;
		border-radius: 4px;
		background-color: hsla(0, 0%, 20%, 0.9);
		color: #fff;
		content: attr(data-tooltip);
		text-align: center;
		font-size: 13px;
		line-height: 1.2;
	}
	[data-tooltip]:after {
		position: absolute;
		bottom: 100%;
		left: 50%;
		width: 0;
		border-top: 5px solid hsla(0, 0%, 20%, 0.9);
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		content: ' ';
	}
	[data-tooltip]:hover:before,
	[data-tooltip]:hover:after {
		visibility: visible;
		opacity: 1;
		transform: translate(-50%, 0);
	}
	[data-tooltip='false']:hover:before,
	[data-tooltip='false']:hover:after {
		visibility: hidden;
		opacity: 0;
	}
</style>
