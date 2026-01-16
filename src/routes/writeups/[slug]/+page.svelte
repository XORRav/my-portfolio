<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import writeups from '../../../data/writeups.json';
  import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';

  $: slug = $page.params.slug;
  $: writeup = writeups.find(w => w.slug === slug);

  let markdownContent = '';
  let loading = true;
  let contentExists = false;

  onMount(async () => {
    if (writeup) {
      try {
        // Try to load markdown file for this writeup
        const response = await fetch(`/writeups-content/${writeup.slug}.md`);
        if (response.ok) {
          markdownContent = await response.text();
          contentExists = true;
        } else {
          // No content file exists
          contentExists = false;
        }
      } catch (error) {
        contentExists = false;
      }
      loading = false;
    }
  });

  function getDifficultyColor(difficulty: string): string {
    const colors: Record<string, string> = {
      'Easy': 'var(--color-success)',
      'Intermediate': 'var(--color-warning)',
      'Medium': 'var(--color-warning)',
      'Hard': 'var(--color-error)'
    };
    return colors[difficulty] || 'var(--color-text-tertiary)';
  }

  function getPlatformIcon(platform: string): string {
    const icons: Record<string, string> = {
      'HackTheBox': '🎯',
      'TryHackMe': '🔐',
      'PortSwigger': '🌐'
    };
    return icons[platform] || '📝';
  }
</script>

<svelte:head>
  <title>{writeup?.title || 'Writeup'} - Portfolio</title>
  <meta name="description" content={writeup?.description || 'CTF Writeup'} />
</svelte:head>

{#if writeup}
  <main class="writeup-detail">
    <!-- Header Section -->
    <header class="writeup-header">
      <div class="container">
        <a href="/writeups" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Writeups
        </a>

        <div class="header-content">
          <div class="header-meta">
            <span class="platform-badge">
              <span class="platform-icon">{getPlatformIcon(writeup.platform)}</span>
              {writeup.platform}
            </span>
            <span class="difficulty-badge" style="color: {getDifficultyColor(writeup.difficulty)}">
              {writeup.difficulty}
            </span>
            <span class="category-badge">{writeup.category}</span>
          </div>

          <h1 class="writeup-title">{writeup.title}</h1>
          <p class="writeup-description">{writeup.description}</p>

          <div class="tags-container">
            {#each writeup.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <div class="content-wrapper">
      <div class="container">
        <div class="content-grid">
          <!-- Article Content -->
          <article class="writeup-content">
            {#if loading}
              <div class="loading-state">
                <div class="spinner"></div>
                <p>Loading writeup...</p>
              </div>
            {:else if contentExists}
              <MarkdownRenderer content={markdownContent} />
            {:else}
              <div class="no-content-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <h2>Content Coming Soon</h2>
                <p>This writeup is currently being prepared. Check back later for the full walkthrough!</p>
              </div>
            {/if}
          </article>
        </div>
      </div>
    </div>

    <!-- Footer Navigation -->
    <div class="writeup-footer">
      <div class="container">
        <a href="/writeups" class="footer-cta">
          <span>View All Writeups</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </main>
{:else}
  <div class="error-state">
    <div class="container">
      <h1>Writeup Not Found</h1>
      <p>The writeup you're looking for doesn't exist.</p>
      <a href="/writeups" class="btn btn-primary">Back to Writeups</a>
    </div>
  </div>
{/if}

<style>
  .writeup-detail {
    padding-top: 73px;
    min-height: 100vh;
  }

  /* Header Section */
  .writeup-header {
    background: var(--color-bg-secondary);
    border-bottom: 1px solid var(--color-border-default);
    padding: 2rem 0 3rem;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-tertiary);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    transition: color var(--transition-base);
  }

  .back-link:hover {
    color: var(--color-accent-blue-light);
  }

  .header-content {
    max-width: 800px;
  }

  .header-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .platform-badge,
  .difficulty-badge,
  .category-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.75rem;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-family: var(--font-mono);
    font-weight: 500;
  }

  .platform-icon {
    font-size: 1.1rem;
  }

  .difficulty-badge {
    font-weight: 600;
  }

  .writeup-title {
    font-size: var(--font-size-4xl);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--color-accent-blue-light) 0%, var(--color-accent-green) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .writeup-description {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    padding: 0.25rem 0.75rem;
    background: rgba(83, 155, 245, 0.1);
    border: 1px solid rgba(83, 155, 245, 0.2);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-family: var(--font-mono);
    color: var(--color-accent-blue-light);
  }

  /* Content Area */
  .content-wrapper {
    padding: 3rem 0;
  }

  .content-grid {
    max-width: 900px;
    margin: 0 auto;
  }

  .writeup-content {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    padding: 3rem;
  }

  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    gap: 1rem;
  }

  .loading-state p {
    color: var(--color-text-tertiary);
    font-family: var(--font-mono);
  }

  .no-content-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    gap: 1.5rem;
    text-align: center;
  }

  .no-content-state svg {
    color: var(--color-text-muted);
    opacity: 0.5;
  }

  .no-content-state h2 {
    font-size: var(--font-size-2xl);
    color: var(--color-text-primary);
    margin: 0;
  }

  .no-content-state p {
    color: var(--color-text-tertiary);
    max-width: 500px;
    line-height: 1.6;
    margin: 0;
  }

  /* Footer */
  .writeup-footer {
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border-default);
    padding: 3rem 0;
    margin-top: 3rem;
  }

  .footer-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.75rem;
    background: var(--color-accent-blue);
    color: var(--color-bg-primary);
    text-decoration: none;
    font-weight: 500;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    font-family: var(--font-mono);
  }

  .footer-cta:hover {
    background: var(--color-accent-blue-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(83, 155, 245, 0.4);
  }

  /* Error State */
  .error-state {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 73px;
    text-align: center;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .writeup-header {
      padding: 1.5rem 0 2rem;
    }

    .writeup-title {
      font-size: var(--font-size-3xl);
    }

    .content-wrapper {
      padding: 2rem 0;
    }

    .writeup-content {
      padding: 2rem 1.5rem;
    }
  }
</style>
