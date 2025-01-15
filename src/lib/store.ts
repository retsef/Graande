import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storageKey = 'graande';
const initialValue = browser ? parseInt(window.localStorage.getItem(storageKey) ?? "0") : 0;

const count = writable(initialValue);

count.subscribe((value) => {
	if(browser) {
		window.localStorage.setItem(storageKey, value.toString());
	}
});

export default count;