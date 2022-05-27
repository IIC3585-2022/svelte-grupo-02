<script>
  import Router from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
  import CallList from './pages/CallList.svelte';
  import Call from './pages/Call.svelte';

  const routes = {
    '/': Home,
    '/calls': CallList,
    '/calls/:id': Call,
  };
</script>

<Router {routes} />
