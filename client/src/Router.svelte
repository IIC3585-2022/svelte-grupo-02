<script>
  import Router, { replace } from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import Home from './pages/Home.svelte';
  import CallList from './pages/CallList.svelte';
  import Call from './pages/Call.svelte';
  import { username } from './stores/session';
  import { id, caller, setCallInformation } from './stores/call';

  const routes = {
    '/': Home,
    '/calls': wrap({
      component: CallList,
      conditions: [() => !!$username],
    }),
    '/calls/:id': wrap({
      component: Call,
      conditions: [
        (detail) => $caller != null || $id != null || $id === detail.params.id,
      ],
    }),
  };

  const handleConditionsFailed = (event) => {
    console.log(event.detail);
    const { route } = event.detail;
    if (route === '/calls') {
      replace('/');
    } else if (route === '/calls/:id') {
      setCallInformation({});
      replace('/calls');
    }
  };
</script>

<Router {routes} on:conditionsFailed={handleConditionsFailed} />
