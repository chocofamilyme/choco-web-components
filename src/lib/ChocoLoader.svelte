<svelte:options customElement="choco-loader" />

<script lang="ts">
	export let size: 'sm' | 'base' | 'lg' | 'xl' = 'base';
	export let box: boolean = false;
	export let color: string = '#fff';
</script>

<div
	class="ui-loader-container ui-loader-container--{size}"
	class:ui-loader-container--box={box}
>
	<div class="ui-loader">
		<div
			class="ui-loader__inner"
			style={color ? `border-color: ${color}` : ''}
		/>
	</div>
</div>

<style lang="scss" scoped>
	@keyframes spinner {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}

		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	.ui-loader {
		position: relative;
		width: 100%;
		height: 100%;

		&-container {
			width: 1.5rem;
			height: 1.5rem;
			margin: auto;
			overflow: hidden;
			padding: 0.5rem;

			&--box {
				width: 3.5rem;
				height: 3.5rem;
				background: #fff;
				border-radius: 1rem;
				box-shadow: 0px 92px 92px rgba(0, 0, 0, 0.05),
					0px 3px 38.4354px rgba(0, 0, 0, 0.0334858),
					0px -3px 20.5494px rgba(0, 0, 0, 0.06),
					0px 5.79369px 11.5198px rgba(0, 0, 0, 0.0189792),
					0px 2.40368px 6.11809px rgba(0, 0, 0, 0.0132742),
					0px 0.705169px 2.54588px rgba(0, 0, 0, 0.00743532);
			}
		}

		&__inner {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 1.5rem;
			height: 1.5rem;
			border-style: solid;
			border-width: 3px;
			border-color: var(--primary);
			border-top-color: transparent !important;
			border-radius: 50%;
			animation: spinner 1s linear infinite;
		}

		&-container--lg {
			width: 2.75rem;
			height: 2.75rem;

			&.ui-loader-container--box {
				width: 5.75rem;
				height: 5.75rem;
				border-radius: 1.5rem;
			}
		}

		&-container--lg &__inner {
			width: 2.75rem;
			height: 2.75rem;
			border-width: 3.5px;
		}

		&-container--md {
			width: 2rem;
			height: 2rem;

			&.ui-loader-container--box {
				width: 4rem;
				height: 4rem;
				border-radius: 1.5rem;
			}
		}

		&-container--md &__inner {
			width: 2rem;
			height: 2rem;
			border-width: 3px;
		}

		&-container--sm {
			width: 1rem;
			height: 1rem;

			&.ui-loader-container--box {
				width: 3rem;
				height: 3rem;
				border-radius: 0.75rem;
			}
		}

		&-container--sm &__inner {
			width: 1rem;
			height: 1rem;
			border-width: 2px;
		}
	}
</style>
