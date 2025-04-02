import { writable } from 'svelte/store';

export const modalOpened = writable(false);

export const customBackground = writable('#ffffff'); // Default to light background