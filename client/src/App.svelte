<script>
  import Router from './Router.svelte';
  import { SyncLoader } from 'svelte-loading-spinners';
  import onServerReady from './hooks/onServerReady';
  import config from './config';

  const ready = onServerReady(`${config.signalingServerUrl}/ping`);
</script>

<main>
  {#if $ready}
    <Router />
  {:else}
    <div class="center">
      <SyncLoader color="#23d160" />
    </div>
  {/if}
</main>

<style>
  main {
    min-height: 100vh;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
  }
</style>
