<script>
  import api from '../services/api';
  import { username } from '../stores/session';

  export let caller;

  const promise = api.get('/calculate', {
    params: {
      personA: $username,
      personB: caller,
    },
  });
</script>

<div class="column is-12-mobile is-4-tablet is-3-desktop">
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{caller}</p>
      <p>
        {#await promise}
          Calculando compatibilidad
        {:then { data: { result } }}
          {result}% de compatibildiad
        {:catch}
          No ha sido posible calcular su compatibilidad
        {/await}
      </p>
      <button class="button is-success mt-2" on:click> Unirse </button>
    </div>
  </div>
</div>
