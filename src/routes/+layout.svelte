<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();

	// Apply theme to document root
	onMount(() => {
		const unsubscribe = theme.subscribe(value => {
			if (typeof document !== 'undefined') {
				document.documentElement.setAttribute('data-theme', value);
			}
		});

		return unsubscribe;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
