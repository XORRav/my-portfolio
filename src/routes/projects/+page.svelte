<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import projectsData from '$lib/../data/projects.json';

  let projects = projectsData;
  let filteredProjects = projectsData;
  let searchQuery = '';
  let sortBy = 'date';

  $: {
    filteredProjects = projects.filter(project => {
      if (searchQuery === '') return true;

      const query = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });

    if (sortBy === 'date') {
      filteredProjects = filteredProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'title') {
      filteredProjects = filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
</script>

<svelte:head>
  <title>Projects | Your Portfolio</title>
  <meta name="description" content="Explore my open-source projects and development work." />
</svelte:head>

<Navbar />

<main class="projects-page">
  <section class="page-hero">
    <div class="hero-content">
      <div class="terminal-line">
        <span class="prompt">$</span>
        <span class="command">ls -la ~/projects</span>
      </div>
      <h1 class="page-title">
        Open Source <span class="text-gradient">Projects</span>
      </h1>
      <p class="page-subtitle">
        Collection of tools, utilities, and infrastructure projects. Built with security, performance, and automation in mind.
      </p>

      <div class="stats-row">
        <div class="stat">
          <span class="stat-value">{projects.length}</span>
          <span class="stat-label">Projects</span>
        </div>
        <div class="stat">
          <span class="stat-value">{projects.filter(p => p.featured).length}</span>
          <span class="stat-label">Featured</span>
        </div>
      </div>
    </div>
  </section>

  <section class="filters-section">
    <div class="filters-container">
      <div class="search-box">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          placeholder="Search projects or tags..."
          bind:value={searchQuery}
          class="search-input"
        />
        {#if searchQuery}
          <button class="clear-search" on:click={() => searchQuery = ''} aria-label="Clear search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        {/if}
      </div>

      <div class="select-wrapper">
        <label for="sort-select" class="filter-label">Sort By</label>
        <select id="sort-select" bind:value={sortBy} class="filter-select">
          <option value="date">Latest First</option>
          <option value="title">Alphabetical</option>
        </select>
      </div>
    </div>
  </section>

  <section class="projects-section">
    <div class="projects-container">
      {#if filteredProjects.length === 0}
        <div class="no-results">
          <div class="no-results-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3>No projects found</h3>
          <p>Try adjusting your search query.</p>
          <button class="btn-secondary" on:click={() => searchQuery = ''}>
            Clear Search
          </button>
        </div>
      {:else}
        <div class="projects-grid">
          {#each filteredProjects as project (project.id)}
            <ProjectCard {project} />
          {/each}
        </div>
      {/if}
    </div>
  </section>
</main>

<Footer />

<style>
  .projects-page {
    padding-top: 73px;
  }

  .page-hero {
    padding: 4rem 0 3rem;
    background: linear-gradient(180deg, rgba(83, 155, 245, 0.05) 0%, transparent 100%);
  }

  .hero-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .terminal-line {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
    margin-bottom: 1rem;
  }

  .prompt {
    color: var(--color-accent-blue);
    margin-right: 0.5rem;
  }

  .command {
    color: var(--color-accent-green);
  }

  .page-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--color-accent-blue-light) 0%, var(--color-accent-green) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .page-subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--color-text-tertiary);
    max-width: 700px;
    margin-bottom: 2rem;
  }

  .stats-row {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .stat {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    font-family: var(--font-mono);
    background: linear-gradient(135deg, var(--color-accent-blue-light) 0%, var(--color-accent-green) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
    margin-top: 0.25rem;
  }

  .filters-section {
    padding: 2rem 0;
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border-default);
    border-bottom: 1px solid var(--color-border-default);
  }

  .filters-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    gap: 1rem;
    align-items: flex-end;
  }

  .search-box {
    position: relative;
    flex: 1;
    max-width: 600px;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-tertiary);
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 0.875rem 3rem 0.875rem 3rem;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    color: var(--color-text-primary);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    transition: all var(--transition-base);
  }

  .search-input:focus {
    outline: none;
    border-color: var(--color-accent-blue);
    box-shadow: 0 0 0 3px rgba(83, 155, 245, 0.1);
  }

  .search-input::placeholder {
    color: var(--color-text-tertiary);
  }

  .clear-search {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--color-text-tertiary);
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    transition: all var(--transition-base);
  }

  .clear-search:hover {
    color: var(--color-text-primary);
    background: rgba(255, 255, 255, 0.05);
  }

  .select-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 180px;
  }

  .filter-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-tertiary);
    font-family: var(--font-mono);
  }

  .filter-select {
    padding: 0.875rem 1rem;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    color: var(--color-text-primary);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    cursor: pointer;
    transition: all var(--transition-base);
  }

  .filter-select:focus {
    outline: none;
    border-color: var(--color-accent-blue);
  }

  .filter-select:hover {
    border-color: var(--color-accent-blue);
  }

  .projects-section {
    padding: 4rem 0 6rem;
  }

  .projects-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 2rem;
  }

  .no-results {
    text-align: center;
    padding: 4rem 2rem;
  }

  .no-results-icon {
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
  }

  .no-results h3 {
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .no-results p {
    color: var(--color-text-tertiary);
    margin-bottom: 1.5rem;
  }

  .btn-secondary {
    padding: 0.75rem 1.5rem;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    color: var(--color-text-primary);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    cursor: pointer;
    transition: all var(--transition-base);
  }

  .btn-secondary:hover {
    border-color: var(--color-accent-blue);
    background: rgba(83, 155, 245, 0.1);
  }

  @media (max-width: 1024px) {
    .page-title {
      font-size: 2.75rem;
    }

    .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .hero-content,
    .filters-container,
    .projects-container {
      padding: 0 1.5rem;
    }

    .page-hero {
      padding: 3rem 0 2rem;
    }

    .page-title {
      font-size: 2.25rem;
    }

    .page-subtitle {
      font-size: 1.125rem;
    }

    .stats-row {
      gap: 1.5rem;
    }

    .filters-container {
      flex-direction: column;
      align-items: stretch;
    }

    .search-box {
      max-width: 100%;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .page-title {
      font-size: 2rem;
    }

    .stats-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .search-input {
      font-size: 0.875rem;
    }
  }
</style>
