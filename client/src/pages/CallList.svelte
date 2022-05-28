<script>
  import { onDestroy, onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import CallCard from '../components/CallCard.svelte';
  import socket from '../services/socket';
  import { username } from '../stores/session';
  import { setCallInformation } from '../stores/call';

  let calls = [];

  onMount(() => {
    socket.emit('request-calls');
    socket.on('calls-sent', ({ calls: previousCalls }) => {
      calls = previousCalls;
    });
    socket.on('call-joined', (call) => {
      setCallInformation(call);
      push(`/calls/${call.id}`);
    });
    socket.on('call-created', (call) => {
      calls = [...calls, call];
    });
    socket.on('call-filled', ({ id }) => {
      calls = calls.filter((call) => call.id !== id);
    });
  });

  onDestroy(() => {
    socket.removeAllListeners();
  });
</script>

<div class="container my-5">
  <h3 class="is-size-4 has-text-grey">{$username}</h3>
  <div class="is-flex is-justify-content-space-between is-align-items-flex-end">
    <h2 class="is-size-1">Llamadas</h2>
    <button
      class="button is-success"
      on:click={() => socket.emit('create-call', { username: $username })}
    >
      Crear llamada
    </button>
  </div>
  <div class="columns my-2 is-mobile is-multiline">
    {#each calls as { id, caller } (id)}
      <CallCard {id} {caller} />
    {/each}
  </div>
</div>
