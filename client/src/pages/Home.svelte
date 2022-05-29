<script>
  import { push } from 'svelte-spa-router';
  import { username } from '../stores/session';
</script>

<div
  class="container h-full is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
>
  <h1 class="has-text-centered is-size-1">Ingresa tu nombre de usuario</h1>
  <form on:submit|preventDefault={() => push('/calls')} class="w-80 my-5">
    <div class="field">
      <input
        type="text"
        class="input"
        placeholder="e.g Alex"
        bind:value={$username}
      />
    </div>
    <div class="field is-flex is-justify-content-center">
      <input
        type="submit"
        class="button is-success w-80 is-center"
        disabled={$username === ''}
        value="Ingresar"
      />
    </div>
  </form>
</div>

<style>
  .h-full {
    min-height: 100vh;
  }

  .w-80 {
    width: 80%;
  }
</style>
