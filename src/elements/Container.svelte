<script lang="ts">
	import { onMount } from 'svelte';

	const AD_CLIENT = 'ca-pub-8781416766784863';
	// TODO: Replace these with real slot IDs from your Google AdSense console
	const SLOT_SIDEBAR = 'REPLACE_WITH_SIDEBAR_SLOT_ID';
	const SLOT_BOTTOM = 'REPLACE_WITH_BOTTOM_SLOT_ID';

	onMount(() => {
		try {
			const w = window as any;
			w.adsbygoogle = w.adsbygoogle || [];
			document.querySelectorAll<HTMLElement>('.adsbygoogle').forEach(() => {
				w.adsbygoogle.push({});
			});
		} catch (e) {}
	});
</script>

<main class="app">
	<aside class="sidebar sidebar-left">
		<ins
			class="adsbygoogle"
			style="display:inline-block;width:160px;height:600px"
			data-ad-client={AD_CLIENT}
			data-ad-slot={SLOT_SIDEBAR}
		></ins>
	</aside>

	<div class="center">
		<div class="container">
			<slot />
		</div>
		<div class="bottom-ad">
			<ins
				class="adsbygoogle"
				style="display:block"
				data-ad-client={AD_CLIENT}
				data-ad-slot={SLOT_BOTTOM}
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</div>
	</div>

	<aside class="sidebar sidebar-right">
		<ins
			class="adsbygoogle"
			style="display:inline-block;width:160px;height:600px"
			data-ad-client={AD_CLIENT}
			data-ad-slot={SLOT_SIDEBAR}
		></ins>
	</aside>
</main>

<style lang="scss">
	.app {
		width: 100%;
		height: 100%;
		top: 0;
		position: fixed;

		.sidebar {
			display: none;
			position: absolute;
			top: 20px;

			&.sidebar-left {
				// right edge sits 8px left of the calculator's left edge
				right: calc(50% + 298px);
			}

			&.sidebar-right {
				// left edge sits 8px right of the calculator's right edge
				left: calc(50% + 298px);
			}

			// 580px container + 8px gap + 160px sidebar, times 2 sides = 916px minimum
			@media (min-width: 920px) {
				display: block;
			}
		}

		.center {
			margin: 0 auto;
			width: 100%;
			max-width: 580px;
			height: 100%;

			.container {
				height: 100%;
				width: 100%;
				max-height: 760px;
			}

			.bottom-ad {
				display: none;
				padding: 4px 0;

				// Only show when there's room below the 760px calculator
				@media (min-height: 810px) {
					display: block;
				}
			}
		}
	}
</style>
