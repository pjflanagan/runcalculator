<script lang="ts">
	import { Row } from '../../elements/index';

	let open = false;
</script>

<Row className="header">
	<div class="header-holder">
		<button class="header" on:click={() => (open = true)}>Run Calculator</button>
	</div>
</Row>

{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal-backdrop" on:click={() => (open = false)}>
		<div class="modal" on:click|stopPropagation>
			<button class="close" on:click={() => (open = false)}>✕</button>
			<div class="modal-content">
				<h1>Running Pace Calculator — Everything You Need to Know</h1>
				<p>Whether you're lacing up a fresh pair of shoes for your first 5K or chasing a marathon PR, knowing your running pace is the single most useful number in your training arsenal. Run Calculator takes your goal time and target event — from the 800 meters all the way up through 100-mile ultras — and instantly tells you the split you need to hit per lap, per mile, or per kilometer. No math, no spreadsheet, just your number.</p>

				<h2>How to Use the Running Pace Calculator</h2>
				<p>Enter the event you're racing, plug in your goal time, and select your split distance. The calculator does the rest. Toggle into <strong>pace mode</strong> if you already know the per-mile or per-kilometer pace you want to run and need to work backward to a finish time. Toggle into <strong>distance mode</strong> if you're training on a course that doesn't match a standard event — enter any distance in miles or kilometers and the app will calculate your splits for that exact distance.</p>
				<p>The calculator supports every major racing distance: 800m, 1200m, 1500m, 1600m, the mile, 3K, 2-mile, 3-mile, 5K, 6K, 8K, 5-mile, 10K, 10-mile, half marathon, marathon, 50K, 50-mile, 100K, and 100-mile. Split options include 200m, 400m, 800m, 1K, and the mile.</p>

				<h2>Why Your Running Shoes Matter for Pace</h2>
				<p>Your gear plays a bigger role in your pace than most runners realize. Modern running shoes have come a long way — carbon-fiber plates, thick stack heights, and nitrogen-infused foam have genuinely changed what splits are possible at the recreational level. If you've been training in a daily trainer and you're racing in a carbon-plated super shoe, expect to run 1–3% faster at the same perceived effort. That's about 10–20 seconds per mile for a 9-minute-mile runner.</p>
				<p>When picking new running shoes, match the shoe to the workout. <strong>Daily trainers</strong> with soft, high-stack foam (like the Brooks Ghost, ASICS Gel-Nimbus, or New Balance Fresh Foam More) are built for easy and moderate-effort miles. <strong>Tempo and race shoes</strong> with a firmer, more responsive midsole (Nike Vaporfly, Adidas Adizero Adios Pro, Saucony Endorphin Pro) are built for the paces you're calculating here. Save them for workouts and races.</p>
				<p>Heel-to-toe drop also affects pace. Lower-drop shoes (0–6mm) encourage a midfoot or forefoot strike. Higher-drop shoes (8–12mm) suit runners who heel-strike naturally. What matters is that your shoe matches your gait and goal pace.</p>

				<h2>Pace, Splits, and Race Strategy</h2>
				<p>Even pacing — running the same split every lap or mile — is statistically the fastest strategy for most race distances. Runners who go out too fast and slow down in the second half lose far more time than they gained up front. For experienced runners chasing a PR, a slight negative split strategy (running the second half 1–3% faster) often yields the best results.</p>
				<p>For track events like the 800 and 1500, knowing your per-400 split is essential. A 2:00 800 requires 60-second 400s. Use the 400m split option and your calculator output becomes your lap-by-lap execution plan. Long-distance runners often benefit from calculating both per-mile pace and per-5K split to check in at every marker without doing mental math late in the race.</p>

				<h2>Training Paces and What They Mean</h2>
				<p>Most training plans prescribe workouts relative to race pace. Easy runs are typically 60–90 seconds per mile slower than your 5K race pace. Tempo runs are usually 20–30 seconds per mile slower than 5K pace. Interval workouts are run at or slightly faster than 5K pace. Use the calculator to convert those relative paces into actual target splits for your current fitness level.</p>
				<p>For example: if you're targeting a 22:00 5K (7:05 per mile), your easy runs should be around 8:05–8:35 per mile, your tempo runs around 7:25–7:35 per mile, and your intervals around 6:55–7:05 per mile.</p>

				<h2>Running Shoes for Every Pace Range</h2>
				<p>If your goal pace is over 10 minutes per mile, prioritize comfort and cushion. Shoes like the HOKA Clifton, Brooks Ghost, or New Balance 1080 are workhorses built for this range.</p>
				<p>If your goal pace is between 7:00 and 9:30 per mile, a versatile trainer like the Nike Pegasus, Saucony Ride, or ASICS Kayano covers most training. For workouts and races at the faster end, rotating in a lighter shoe will keep your legs fresh.</p>
				<p>If you're targeting sub-7 pace — a sub-21 5K, sub-1:32 half, or sub-3:03 marathon — you're in carbon plate territory. The Nike Vaporfly, Adidas Adizero Adios Pro, Saucony Endorphin Pro, and New Balance SC Elite are the dominant options. At easy pace they feel awkward; at race pace they feel like they're pushing you forward. Give any new shoe at least 30–50 miles before racing in it.</p>

				<h2>Cross Country, Track, and Road</h2>
				<p>The Run Calculator works across all running disciplines. Track runners use it to hit 400m splits. Cross country runners use 1K or mile splits to track effort over varying terrain. Road runners use it for per-mile targets during training and per-kilometer splits during races. Cross country pace varies enormously with terrain — use splits as a rough guide rather than a rigid target.</p>

				<h2>Shareable Links</h2>
				<p>Every configuration in Run Calculator is encoded in the URL. Set up a calculation and share the link with a coach or training partner — they'll open the exact same calculator state. Great for sharing goal paces for a team workout or sending a friend the splits for a race they're targeting.</p>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.header-holder {
		height: 100%;
		width: 100%;

		.header {
			display: block;
			position: relative;
			top: 50%;
			width: 100%;
			transform: translateY(-50%);
			font-size: 3.6em;
			text-align: center;
			font-family: inherit;
			background: none;
			border: none;
			color: inherit;
			padding: 0;
			cursor: pointer;
		}
	}

	@media (min-width: 580px) {
		.header-holder {
			.header {
				font-size: 6.9em;
				margin-top: 12px;
			}
		}
	}

	.modal-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		background: #fff;
		color: #1c1c1c;
		width: 90%;
		max-width: 620px;
		max-height: 80vh;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		position: relative;

		.close {
			position: absolute;
			top: 0.75rem;
			right: 0.75rem;
			background: none;
			border: none;
			font-size: 1.2rem;
			cursor: pointer;
			color: #1c1c1c;
			line-height: 1;
			padding: 0.25rem 0.5rem;

			&:hover {
				opacity: 0.6;
			}
		}

		.modal-content {
			overflow-y: auto;
			padding: 2rem 1.75rem 2rem;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
				sans-serif;
			font-size: 0.9rem;
			line-height: 1.7;

			h1 {
				font-size: 1.6rem;
				margin: 0 0 1rem;
				font-family: 'Bebas Neue', sans-serif;
				letter-spacing: 0.03em;
			}

			h2 {
				font-size: 1.15rem;
				margin: 1.5rem 0 0.5rem;
				font-family: 'Bebas Neue', sans-serif;
				letter-spacing: 0.03em;
			}

			p {
				margin: 0 0 0.75rem;
			}
		}
	}
</style>
