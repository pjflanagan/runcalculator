<script lang="ts">
	import classNames from 'classnames';
	import Panel from './Panel.svelte';
	export let large: boolean = false;

	const className = classNames('colon', { large });
</script>

<Panel type="colon">
	<div class="colon-holder">
		<div class={className}>:</div>
	</div>
</Panel>

<style lang="scss">

	.colon-holder {
		height: 100%;
		width: 100%;

		.colon {
			position: relative;
			top: 50%;
			transform: translateY(-50%);
			font-family: $bebasFontFamily;
			color: #fffd;
			font-size: 32px;

			&.large {
				font-size: 42px;
			}
		}
	}
</style>
