<script lang="ts">
	import { Row, Clock, Colon, Number, Decimal, Unit } from '../../elements';
	import { Time, Error } from '../../models';

	export let timeOut: number;
	export let inputError: boolean;

	const large = true;

	$: [h10, h1, m10, m1, s10, s1, d, displayTimeError] = Time.makeDisplayTime(timeOut);
	$: error = Error.hasError(displayTimeError) || inputError;
</script>

<Row className="time-out">
	<Clock>
		{#if h10 > 0 && !error}
			<Number num={h10} {large} {error} />
		{/if}
		{#if (h10 > 0 || h1 > 0) && !error}
			<Number num={h1} {large} {error} />
			<Unit unit="h" {large} />
			<Colon {large} />
		{/if}
		<Number num={m10} {large} {error} />
		<Number num={m1} {large} {error} />
		<Unit unit="m" {large} />
		<Colon {large} />
		<Number num={s10} {large} {error} />
		<Number num={s1} {large} {error} />
		<Unit unit="s" {large} />
		<Decimal dec={d} {error} />
	</Clock>
</Row>
