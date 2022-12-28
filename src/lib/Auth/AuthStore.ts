import { writable } from 'svelte/store';

export let authenticated = writable(false)
export let username = writable("")
