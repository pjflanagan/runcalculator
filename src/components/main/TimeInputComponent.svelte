<script lang="ts">
	import {
		Row,
		RowDivider,
		RowLabel,
		RowWidgetHolder,
		Clock,
		Number,
		Colon,
		Arrow,
		Unit
	} from '../../elements';
	import { Time } from '../../models';

	export let timeIn: number;
	export let paceMode: boolean;

	const MAX_TIME_IN = 9 * 60 * 60 + 59 * 60 + 59;

	const addTime = (currentNumber: number, maxNumber: number, deltaSeconds: number) => {
		let newTime;
		if (currentNumber === maxNumber && deltaSeconds > 0) {
			newTime = timeIn - maxNumber * deltaSeconds
		} else if(currentNumber === 0 && deltaSeconds < 0) {
			newTime = timeIn - maxNumber * deltaSeconds // deltaSeconds is negative here
		} else {
			newTime = timeIn + deltaSeconds;
		}
		if (newTime > MAX_TIME_IN) {
			return;
		} else if (newTime < 0) {
			return;
		}
		timeIn = newTime;
	};

	$: [_h10, h1, m10, m1, s10, s1, _d, _error] = Time.makeDisplayTime(timeIn);
	$: labelDisplay = paceMode ? 'PACE' : 'TIME';

	const onClockKeyDown = (e: KeyboardEvent) => {
		const container = e.currentTarget as HTMLElement;
		const panels = Array.from(container.querySelectorAll('[tabindex="0"]')) as HTMLElement[];
		const idx = panels.indexOf(document.activeElement as HTMLElement);
		if (idx === -1) return;

		if (e.code === 'ArrowRight') {
			e.preventDefault();
			if (idx < panels.length - 1) panels[idx + 1].focus();
		} else if (e.code === 'ArrowLeft') {
			e.preventDefault();
			if (idx > 0) panels[idx - 1].focus();
		} else if (e.code === 'Tab' && !e.shiftKey) {
			e.preventDefault();
			(document.getElementById('split-focus') as HTMLElement)?.focus();
		} else if (e.code === 'Tab' && e.shiftKey) {
			e.preventDefault();
			(document.getElementById('event-focus') as HTMLElement)?.focus();
		}
	};
</script>

<Row className="widget-clock">
	<RowLabel onClick={() => (paceMode = !paceMode)}>{labelDisplay}</RowLabel>
	<RowDivider />
	<RowWidgetHolder>
		<div class="arrows-holder">
			<Arrow direction="UP" onClick={() => addTime(h1, 9, 3600)} />
			<Arrow />
			<Arrow direction="UP" onClick={() => addTime(m10, 5, 600)} />
			<Arrow direction="UP" onClick={() => addTime(m1, 9, 60)} />
			<Arrow />
			<Arrow direction="UP" onClick={() => addTime(s10, 5, 10)} />
			<Arrow direction="UP" onClick={() => addTime(s1, 9, 1)} />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="clock-holder" on:keydown={onClockKeyDown}>
			<Clock>
				<Number num={h1} {addTime} deltaSeconds={3600} />
				<Unit unit="h" />
				<Colon />
				<Number num={m10} maxNum={5} {addTime} deltaSeconds={600} />
				<Number num={m1} {addTime} deltaSeconds={60} />
				<Unit unit="m" />
				<Colon />
				<Number num={s10} maxNum={5} {addTime} deltaSeconds={10} />
				<Number num={s1} {addTime} deltaSeconds={1} />
				<Unit unit="s" />
			</Clock>
		</div>
		<div class="arrows-holder">
			<Arrow direction="DOWN" onClick={() => addTime(h1, 9, -3600)} />
			<Arrow />
			<Arrow direction="DOWN" onClick={() => addTime(m10, 5, -600)} />
			<Arrow direction="DOWN" onClick={() => addTime(m1, 9, -60)} />
			<Arrow />
			<Arrow direction="DOWN" onClick={() => addTime(s10, 5, -10)} />
			<Arrow direction="DOWN" onClick={() => addTime(s1, 9, -1)} />
		</div>
	</RowWidgetHolder>
</Row>

<style lang="scss">
	.arrows-holder {
		display: flex;
		height: 26px;
		line-height: 32px;
	}
	.clock-holder {
		height: calc(100% - 52px);
	}
</style>
