<svelte:options customElement="choco-card" />

<script lang="ts">
	export let image: string,
		alt: string,
		height: number = 200;
</script>

<article class="choco-card">
	<!-- top -->
	{#if $$slots.top}
		<div class="choco-card__top">
			<slot name="top" />
		</div>
	{/if}

	<!-- img -->
	<div class="choco-card__img-wrapper" style="height: {height}px">
		<img src={image} {alt} class="block w-full h-full object-cover" />

		<!-- overlay -->
		{#if $$slots.overlay}
			<div class="choco-card__overlay-container">
				<div class="choco-card__overlay">
					<slot name="overlay" />
				</div>
			</div>
		{/if}
	</div>

	<!-- title -->
	<div class="choco-card__title">
		<slot name="title" />
	</div>

	<!-- description -->
	<div class="choco-card__description">
		<slot name="description" />
	</div>
</article>

<style lang="scss">
	.choco-card {
		position: relative;

		&__top {
			position: absolute;
			z-index: 10;
			top: 0.5rem;
			right: 0.5rem;
			left: 0.5rem;
		}

		&__img-wrapper {
			position: relative;
			width: 100%;
			margin-bottom: 0.5rem;
			overflow: hidden;
			background: $grey-light-color;
			border-radius: 1.5rem;

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__overlay {
			@include absolute-transform-50;
			width: 100%;
			padding: 0 1rem;
			line-height: 1;
			font-weight: 900;
			color: $light-color;
			text-align: center;

			&-container {
				position: absolute;
				z-index: 1;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				border-radius: 1.5rem;
				background: linear-gradient(
					180deg,
					rgba(0, 0, 0, 0.6) 35.75%,
					#000 109.5%
				);
			}
		}

		&__title {
			@include text-lg;
			margin-bottom: 0.25rem;
			font-weight: 900;
		}

		&__description {
			@include text-xs;
			font-weight: 500;
		}
	}
</style>
