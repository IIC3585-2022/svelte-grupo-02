import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export default function onServerReady(url) {
  const { subscribe, set } = writable(false);

  onMount(async () => {
    await fetch(url);
    set(true);
  });

  return {
    subscribe,
  };
}
