<script>
  import { push } from 'svelte-spa-router';
  import { SyncLoader } from 'svelte-loading-spinners';
  import { onMount, onDestroy } from 'svelte';
  import socket from '../services/socket';
  import { id, caller, callee, setCallInformation } from '../stores/call';

  export let params = {};
  const ready = false;

  onMount(async () => {
    if ($caller == null || $id == null || $id !== params.id) {
      setCallInformation({});
      push('/calls');
    } else {
      socket.on('call-joined', setCallInformation);
    }
  });

  onDestroy(() => {
    socket.removeAllListeners();
    setCallInformation({});
  });
</script>

<div
  class="container is-full is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
>
  {#if !ready}
    {#if !$callee}
      <p class="is-size-2">Esperando a que alguien se una</p>
    {:else}
      <p class="is-size-2">Esperando a que empiece la llamada</p>
    {/if}
    <SyncLoader />
  {/if}
</div>

<style>
  .is-full {
    width: 100%;
    height: 100%;
  }
</style>
