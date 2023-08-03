<svelte:options customElement="choco-checkbox" />

<script lang="ts">
	export let label: string = '';
	export let val: unknown;
</script>

<label class="choco-checkbox">
	<input type="checkbox" value={val} on:input />
	<span class="choco-checkbox__mark" />
	<span class="choco-checkbox__text">{label}</span>

	<!-- Слот -->
	<slot />
</label>

<style lang="scss">
	.choco-checkbox {
		position: relative;
		display: inline-flex;
		align-items: center;

		&:active {
			outline: 0;
		}

		input[type='checkbox'] {
			position: absolute;
			width: 0;
			height: 0;
			opacity: 0;
		}

		&__mark {
			position: relative;
			flex-shrink: 0;
			margin-right: 0.5rem;
			width: 30px;
			height: 30px;
			border: 2px solid #000;
			border-radius: 0.5rem;

			&:after {
				content: '';
				position: absolute;
				left: 8.5px;
				top: 2px;
				width: 10px;
				height: 18px;
				display: none;
				border: solid white;
				border-width: 0 3px 3px 0;
				transform: rotate(45deg);
			}
		}

		&__text {
			@include text-base;
			font-weight: 500;
		}

		& input[type='checkbox']:checked ~ &__mark {
			background-color: var(--primary);
			border-color: var(--primary);

			&:after {
				display: block;
			}
		}
	}
</style>
