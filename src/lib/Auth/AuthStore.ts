import { writable } from 'svelte/store';
import AppwriteManager from '$lib/AppwriteManager'

export let authenticated = writable(false)
export let username = writable("")
