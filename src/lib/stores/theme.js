import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize theme from localStorage or system preference
const getInitialTheme = () => {
  if (!browser) return 'dark';

  const stored = localStorage.getItem('theme');
  if (stored) return stored;

  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'dark';
};

export const theme = writable(getInitialTheme());

// Subscribe to theme changes and update localStorage + DOM
if (browser) {
  theme.subscribe(value => {
    localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  });

  // Set initial theme on DOM
  document.documentElement.setAttribute('data-theme', getInitialTheme());
}

export const toggleTheme = () => {
  theme.update(current => current === 'dark' ? 'light' : 'dark');
};
