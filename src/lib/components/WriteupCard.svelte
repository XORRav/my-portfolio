<script>
  export let writeup;

  function getDifficultyColor(difficulty) {
    switch(difficulty) {
      case 'Easy': return 'var(--color-success)';
      case 'Intermediate':
      case 'Medium': return 'var(--color-warning)';
      case 'Advanced':
      case 'Hard': return 'var(--color-error)';
      default: return 'var(--color-text-tertiary)';
    }
  }

  function getPlatformIcon(platform) {
    switch(platform.toLowerCase()) {
      case 'hackthebox':
      case 'htb': return '🎯';
      case 'tryhackme':
      case 'thm': return '🔐';
      case 'portswigger': return '🔬';
      default: return '📝';
    }
  }
</script>

<a href="/writeups/{writeup.slug}" class="writeup-card" class:featured={writeup.featured}>
  {#if writeup.featured}
    <div class="featured-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      Featured
    </div>
  {/if}

  <div class="card-header">
    <div class="platform-badge">
      <span class="platform-icon">{getPlatformIcon(writeup.platform)}</span>
      {writeup.platform}
    </div>
    <div class="difficulty-badge" style="color: {getDifficultyColor(writeup.difficulty)}">
      {writeup.difficulty}
    </div>
  </div>

  <div class="card-content">
    <h3 class="writeup-title">{writeup.title}</h3>
    <p class="writeup-description">{writeup.description}</p>

    <div class="writeup-meta">
      <span class="category-tag">{writeup.category}</span>
    </div>

    <div class="writeup-tags">
      {#each writeup.tags as tag}
        <span class="tag">#{tag}</span>
      {/each}
    </div>
  </div>

  <div class="card-footer">
    <div class="writeup-date">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      {new Date(writeup.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
    </div>

    <div class="read-more">
      Read writeup
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
  </div>
</a>

<style>
  .writeup-card {
    position: relative;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    transition: all var(--transition-slow);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
  }

  .writeup-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent-blue) 0%, var(--color-accent-green) 100%);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-slow);
  }

  .writeup-card:hover {
    border-color: var(--color-accent-blue);
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }

  .writeup-card:hover::before {
    transform: scaleX(1);
  }

  .writeup-card.featured {
    border-color: rgba(83, 155, 245, 0.4);
    background: linear-gradient(180deg, rgba(83, 155, 245, 0.05) 0%, var(--color-bg-tertiary) 100%);
  }

  .featured-badge {
    position: absolute;
    top: -1px;
    right: 1.5rem;
    background: linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-green) 100%);
    color: var(--color-bg-primary);
    padding: 0.375rem 0.875rem;
    border-radius: 0 0 var(--radius-md) var(--radius-md);
    font-size: 0.75rem;
    font-weight: 600;
    font-family: var(--font-mono);
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .platform-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.875rem;
    background: rgba(83, 155, 245, 0.1);
    border: 1px solid rgba(83, 155, 245, 0.2);
    border-radius: var(--radius-sm);
    color: var(--color-accent-blue-light);
    font-size: 0.75rem;
    font-family: var(--font-mono);
    font-weight: 500;
  }

  .platform-icon {
    font-size: 0.875rem;
  }

  .difficulty-badge {
    font-size: 0.75rem;
    font-family: var(--font-mono);
    font-weight: 600;
    padding: 0.25rem 0.625rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-sm);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
  }

  .writeup-title {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
    line-height: 1.3;
  }

  .writeup-description {
    color: var(--color-text-tertiary);
    line-height: 1.6;
    font-size: 0.9rem;
    margin: 0;
  }

  .writeup-meta {
    display: flex;
    gap: 0.5rem;
  }

  .category-tag {
    font-size: 0.75rem;
    font-family: var(--font-mono);
    color: var(--color-accent-blue-light);
    background: rgba(83, 155, 245, 0.15);
    border: 1px solid rgba(83, 155, 245, 0.3);
    padding: 0.25rem 0.625rem;
    border-radius: var(--radius-sm);
    font-weight: 500;
  }

  .writeup-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    font-size: 0.75rem;
    font-family: var(--font-mono);
    color: var(--color-accent-green);
    background: rgba(141, 219, 140, 0.1);
    border: 1px solid rgba(141, 219, 140, 0.2);
    padding: 0.25rem 0.625rem;
    border-radius: var(--radius-sm);
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.75rem;
    border-top: 1px solid var(--color-border-muted);
    margin-top: auto;
  }

  .writeup-date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.8rem;
    font-family: var(--font-mono);
  }

  .read-more {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-accent-blue-light);
    font-size: 0.875rem;
    font-family: var(--font-mono);
    font-weight: 500;
    transition: all var(--transition-base);
  }

  .writeup-card:hover .read-more {
    gap: 0.75rem;
  }

  .read-more svg {
    transition: transform var(--transition-base);
  }

  .writeup-card:hover .read-more svg {
    transform: translateX(2px);
  }

  @media (max-width: 768px) {
    .writeup-card {
      padding: 1.5rem;
    }
  }
</style>
