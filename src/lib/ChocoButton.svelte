<svelte:options customElement="choco-button" />

<script lang="ts">
	import './../../style.css';
	export let size: string = 'base',
		type: string = 'light',
		minWidth: number = 0,
		contentPadding: string,
		// disabled: boolean,
		loading: boolean;
</script>

<button
	class="choco-button {size === 'base' ? '' : `choco-btn--${size}`}"
	style={minWidth ? `min-width: ${minWidth}px;` : ''}
	on:click
>
	<span
		class="choco-button__content choco-button__content--{type}"
		style={contentPadding ? `padding: ${contentPadding}` : ''}
	>
		<span class="choco-button__inner" style={loading ? 'opacity: 0' : ''}>
			<slot />
		</span>
	</span>
</button>

<style lang="scss">
	*,
	*:before,
	*:after {
		margin: 0;
		padding: 0;
		border: 0;
	}

	.choco-button {
		position: relative;
		display: block;
		width: 100%;
		overflow: hidden;
		isolation: isolate;
		text-align: center;
		border-radius: 0.75rem;
		background: #fff;
		font-size: 1.125rem /* 18px */;
		line-height: 1.25rem /* 20px */;
		font-weight: 900;

		&--sm &__content {
			min-height: 2.25rem;
			padding: 0.5rem;
			font-size: 1rem;
			font-weight: 400;
		}

		&--lg &__content {
			min-height: 3.25rem;
		}

		&--xl &__content {
			min-height: 4rem;
		}

		&--lg,
		&--xl {
			border-radius: 1rem;
		}

		&--lg &__content,
		&--xl &__content {
			padding: 0.875rem;
			font-size: 1.5rem;
		}

		&__content {
			display: flex;
			align-items: center;
			justify-items: center;
			height: 100%;
			min-height: 2.75rem;
			padding: 0.75rem;
			font-size: 1.125rem;

			&--white {
				background-color: #fff;
			}

			&--light {
				background-color: #f1f2f7;
			}

			&--dark {
				color: #fff;
				background-color: #000;
			}

			&--primary {
				color: #fff;
				background-color: #ff511b;
			}
		}

		&__inner {
			display: block;
			width: 100%;
			transition: 0.25s;
		}
	}
</style>
