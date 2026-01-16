<script>
  export let project;
</script>

<article class="project-card" class:featured={project.featured}>
  {#if project.featured}
    <div class="featured-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      Featured
    </div>
  {/if}

  <div class="card-content">
    <h3 class="project-title">{project.title}</h3>
    <p class="project-description">{project.description}</p>

    <div class="project-tags">
      {#each project.tags as tag}
        <span class="tag">#{tag}</span>
      {/each}
    </div>
  </div>

  <div class="card-footer">
    <div class="project-date">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
    </div>

    <div class="project-links">
      {#if project.githubUrl}
        <a href={project.githubUrl} class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      {/if}
      {#if project.demoUrl}
        <a href={project.demoUrl} class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View demo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      {/if}
    </div>
  </div>
</article>

<style>
  .project-card {
    position: relative;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    transition: all var(--transition-slow);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .project-card::before {
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

  .project-card:hover {
    border-color: var(--color-accent-blue);
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }

  .project-card:hover::before {
    transform: scaleX(1);
  }

  .project-card.featured {
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

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
  }

  .project-title {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
    line-height: 1.3;
  }

  .project-description {
    color: var(--color-text-tertiary);
    line-height: 1.6;
    font-size: 0.9rem;
    margin: 0;
  }

  .project-tags {
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

  .project-date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.8rem;
    font-family: var(--font-mono);
  }

  .project-links {
    display: flex;
    gap: 0.75rem;
  }

  .project-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-md);
    color: var(--color-text-tertiary);
    background: rgba(83, 155, 245, 0.1);
    border: 1px solid transparent;
    transition: all var(--transition-base);
  }

  .project-link:hover {
    color: var(--color-accent-blue-light);
    background: rgba(83, 155, 245, 0.15);
    border-color: var(--color-accent-blue);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .project-card {
      padding: 1.5rem;
    }
  }
</style>
