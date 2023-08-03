<svelte:options customElement="choco-button" />

<script lang="ts">
	import ChocoLoader from './ChocoLoader.svelte';

	interface UiButtonProps {
		type?: 'light' | 'dark' | 'primary' | 'white';
		size?: 'sm' | 'base' | 'lg' | 'xl';
		minWidth?: number;
		contentPadding?: string;
		disabled?: boolean;
		loading?: boolean;
		href?: string;
	}

	export let type: UiButtonProps['type'] = 'light';
	export let size: UiButtonProps['size'] = 'base';
	export let minWidth: UiButtonProps['minWidth'] = 0;
	export let contentPadding: UiButtonProps['contentPadding'] = '';
	export let disabled: UiButtonProps['disabled'] = false;
	export let loading: UiButtonProps['loading'] = false;
	export let href: UiButtonProps['href'] = '';

	const loaderColor = type === 'white' ? '#ff511b' : '#fff';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class="ui-btn {size === 'base' ? '' : 'ui-btn--' + size}"
	class:pointer-events-none={disabled || loading}
	style="min-width: {minWidth}px;"
	role="{href ? 'button' : null}}"
>
	<span
		class="ui-btn__content {`ui-btn__content--${type}`}"
		style="padding: {contentPadding}; opacity: {disabled ? 0.5 : 1}"
	>
		<span class="ui-btn__inner" style="opacity: {loading ? 0 : 1}">
			<slot />
		</span>
		{#if loading}
			<div class="ui-btn__loader">
				<ChocoLoader size="md" color={loaderColor} />
			</div>
		{/if}
	</span>
</svelte:element>

<style lang="scss">
	.ui-btn {
		position: relative;
		display: block;
		width: 100%;
		overflow: hidden;
		text-align: center;
		font-size: 1.125rem;
		font-weight: 900;
		isolation: isolate;
		border-radius: 0.75rem;
		background: #fff;
		outline: none;
		border: none;
		padding: 0;
		text-decoration: none;

		&__content {
			min-height: 2.75rem;
			padding: 0.75rem;
			font-size: 1.125rem;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;

			&--white {
				background-color: #fff;
			}

			&--light {
				background-color: (--grey-lite);
			}

			&--dark {
				color: #fff;
				background-color: #000;
			}

			&--primary {
				color: #fff;
				background-color: var(--primary);
			}
		}

		&__loader {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

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

		&__inner {
			transition: 0.25s;
			display: block;
			width: 100%;
		}
	}

	.pointer-events-none {
		pointer-events: none;
	}
</style>
