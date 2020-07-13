import { writable } from "svelte/store";

// The constructor of the notification center,
// implemented as a Svelte's custom store, based on a writable one.
const createStore = () => {
	// Initialization of the internal writable store with an empty list.
	const { subscribe, set, update } = writable<string[]>([]);

	// Marking a message as read by removing it from the list.
	const dismiss = (message: string) =>
		update((messages) => messages.filter((msg) => msg !== message));

	// Adding a new message to the beginning of the list.
	const add = (message: string) => update((messages) => [message, ...messages]);

	return {
		subscribe, // This is required for the auto-subscriptions to work.
		add,
		init: set, // Alias `set` method to `init`.
		dismiss,
		clear: () => set([]),
	};
};

// Initialize the notification center.
const notifCenter = createStore();

export { notifCenter };
