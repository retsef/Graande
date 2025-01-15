<script>
	import Sparkle from "../assets/sparkle.svg?component";
	import count from '$lib/store';

	$: counter = count;
</script>

<a class="graande" href="#" on:click={() => count.update((n) => n + 1)}>
	<Sparkle />
	<Sparkle />
	<Sparkle />
	<Sparkle />

	<span>Graande!</span>
	<span aria-hidden="true">Graande!</span>
</a>


<span class="counter">
	{$counter}
</span>