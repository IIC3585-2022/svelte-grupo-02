import { writable } from 'svelte/store';

export const id = writable(null);
export const caller = writable(null);
export const callee = writable(null);

export const setCallInformation = (data) => {
  id.set(data.id);
  caller.set(data.caller);
  callee.set(data.callee);
};
