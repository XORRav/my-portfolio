<script>
  import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<button
  class="theme-toggle"
  on:click={toggleTheme}
  aria-label="Toggle theme"
  title="Toggle theme"
>
  {#if $theme === 'dark'}
    <!-- Sun Icon for Light Mode -->
    <svg class="theme-icon sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  {:else}
    <!-- Moon Icon for Dark Mode -->
    <svg class="theme-icon moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-base);
    color: var(--color-text-tertiary);
    padding: 0;
  }

  .theme-toggle:hover {
    background: var(--color-bg-tertiary);
    border-color: var(--color-accent-blue);
    color: var(--color-accent-blue-light);
    transform: rotate(20deg);
  }

  .theme-toggle:active {
    transform: rotate(20deg) scale(0.95);
  }

  .theme-icon {
    width: 20px;
    height: 20px;
    transition: transform var(--transition-base);
  }

  .theme-toggle:hover .sun {
    transform: rotate(45deg);
  }

  .theme-toggle:hover .moon {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .theme-toggle {
      width: 36px;
      height: 36px;
    }

    .theme-icon {
      width: 18px;
      height: 18px;
    }
  }
</style>
