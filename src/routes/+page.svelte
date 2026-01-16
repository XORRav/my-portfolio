<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import projectsData from '$lib/../data/projects.json';
  import writeupsData from '$lib/../data/writeups.json';

  let visible = false;

  onMount(() => {
    visible = true;
  });

  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
  const featuredWriteups = writeupsData.filter(w => w.featured).slice(0, 3);

  const skills = [
    { name: 'Web Security', icon: '🔐' },
    { name: 'Penetration Testing', icon: '🎯' },
    { name: 'Network Security', icon: '🌐' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' }
  ];
</script>

<svelte:head>
  <title>Security Researcher & Developer | Portfolio</title>
  <meta name="description" content="Security researcher, penetration tester, and developer. Explore my CTF writeups, security tools, and homelab projects." />
</svelte:head>

<Navbar />

<main class="landing-page" class:visible>
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge animate-fadeIn">
          <span class="badge-dot"></span>
          Available for security research & consulting
        </div>

        <h1 class="hero-title animate-slideUp">
          Security Researcher &<br />
          <span class="text-gradient">Penetration Tester</span>
        </h1>

        <p class="hero-description animate-slideUp">
          Exploring vulnerabilities, building security tools, and documenting my journey
          through CTF challenges and real-world penetration testing. Passionate about
          offensive security, automation, and sharing knowledge with the community.
        </p>

        <div class="hero-actions animate-slideUp">
          <a href="/projects" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            View Projects
          </a>
          <a href="/writeups" class="btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            Read Writeups
          </a>
        </div>

        <div class="hero-stats animate-fadeIn">
          <div class="stat-item">
            <span class="stat-value">{projectsData.length}+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{writeupsData.length}+</span>
            <span class="stat-label">Writeups</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">24/7</span>
            <span class="stat-label">Learning</span>
          </div>
        </div>
      </div>

      <div class="hero-visual animate-fadeIn">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="btn-red"></span>
              <span class="btn-yellow"></span>
              <span class="btn-green"></span>
            </div>
            <span class="terminal-title">~/security/scanner.py</span>
          </div>
          <div class="terminal-body">
            <div class="terminal-line">
              <span class="prompt">$</span>
              <span class="command">python3 scanner.py --target 10.10.10.0/24</span>
            </div>
            <div class="terminal-output">
              <span class="output-success">[+] Initiating network scan...</span>
              <span class="output-info">[*] Scanning 256 hosts</span>
              <span class="output-success">[+] Found 12 active hosts</span>
              <span class="output-warning">[!] Detected open ports: 22, 80, 443</span>
              <span class="output-success">[+] Vulnerabilities identified: 3 critical</span>
              <span class="typing">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="skills-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-icon">⚡</span>
          Core Competencies
        </h2>
        <p class="section-subtitle">Technologies and methodologies I work with daily</p>
      </div>

      <div class="skills-grid">
        {#each skills as skill, i}
          <div class="skill-card" style="animation-delay: {i * 0.1}s">
            <span class="skill-icon">{skill.icon}</span>
            <span class="skill-name">{skill.name}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Featured Projects Section -->
  <section class="featured-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-icon">🚀</span>
          Featured Projects
        </h2>
        <p class="section-subtitle">Open-source tools and infrastructure projects</p>
        <a href="/projects" class="section-link">
          View all projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <div class="featured-grid">
        {#each featuredProjects as project}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="featured-card">
            <div class="card-header">
              <h3 class="card-title">{project.title}</h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
            <p class="card-description">{project.description}</p>
            <div class="card-tags">
              {#each project.tags as tag}
                <span class="tag">#{tag}</span>
              {/each}
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Featured Writeups Section -->
  <section class="featured-section alt">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-icon">📝</span>
          Latest Writeups
        </h2>
        <p class="section-subtitle">Recent CTF challenges and penetration testing walkthroughs</p>
        <a href="/writeups" class="section-link">
          View all writeups
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <div class="writeups-list">
        {#each featuredWriteups as writeup}
          <a href="/writeups/{writeup.slug}" class="writeup-item">
            <div class="writeup-meta">
              <span class="writeup-platform">{writeup.platform}</span>
              <span class="writeup-difficulty" style="color: {
                writeup.difficulty === 'Easy' ? 'var(--color-success)' :
                writeup.difficulty === 'Medium' ? 'var(--color-warning)' :
                'var(--color-error)'
              }">{writeup.difficulty}</span>
            </div>
            <h3 class="writeup-title">{writeup.title}</h3>
            <p class="writeup-description">{writeup.description}</p>
            <div class="writeup-tags">
              {#each writeup.tags.slice(0, 4) as tag}
                <span class="tag-small">#{tag}</span>
              {/each}
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">Let's Build Something Secure</h2>
        <p class="cta-description">
          Interested in collaboration, security research, or just want to discuss
          the latest vulnerabilities? I'm always open to connecting with fellow security enthusiasts.
        </p>
        <div class="cta-actions">
          <a href="#contact" class="btn btn-primary">Get in Touch</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<Footer />

<style>
  .landing-page {
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  .landing-page.visible {
    opacity: 1;
  }

  /* Hero Section */
  .hero-section {
    min-height: calc(100vh - 73px);
    display: flex;
    align-items: center;
    padding: 6rem 0 4rem;
    background:
      radial-gradient(ellipse at top, rgba(83, 155, 245, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(141, 219, 140, 0.05) 0%, transparent 50%);
  }

  .hero-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(83, 155, 245, 0.1);
    border: 1px solid rgba(83, 155, 245, 0.2);
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-family: var(--font-mono);
    color: var(--color-accent-blue-light);
    margin-bottom: 2rem;
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    background: var(--color-success);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: var(--color-text-primary);
  }

  .hero-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-text-tertiary);
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 1.75rem;
    font-weight: 700;
    font-family: var(--font-mono);
    background: linear-gradient(135deg, var(--color-accent-blue-light) 0%, var(--color-accent-green) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .stat-divider {
    width: 1px;
    height: 2rem;
    background: var(--color-border-default);
  }

  /* Terminal Visual */
  .hero-visual {
    position: relative;
  }

  .terminal-window {
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
  }

  .terminal-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: var(--color-bg-elevated);
    border-bottom: 1px solid var(--color-border-default);
  }

  .terminal-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .terminal-buttons span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .btn-red { background: #ff5f56; }
  .btn-yellow { background: #ffbd2e; }
  .btn-green { background: #27c93f; }

  .terminal-title {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
  }

  .terminal-body {
    padding: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.875rem;
  }

  .terminal-line {
    margin-bottom: 1rem;
  }

  .prompt {
    color: var(--color-accent-blue-light);
    margin-right: 0.5rem;
  }

  .command {
    color: var(--color-accent-green);
  }

  .terminal-output {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .output-success {
    color: var(--color-success);
  }

  .output-info {
    color: var(--color-accent-blue-light);
  }

  .output-warning {
    color: var(--color-warning);
  }

  .typing {
    color: var(--color-accent-blue-light);
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* Sections */
  .skills-section,
  .featured-section {
    padding: 6rem 0;
  }

  .featured-section.alt {
    background: linear-gradient(180deg, transparent 0%, rgba(83, 155, 245, 0.03) 50%, transparent 100%);
  }

  .section-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .title-icon {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-tertiary);
    max-width: 600px;
    margin: 0 auto;
  }

  .section-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    color: var(--color-accent-blue-light);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    transition: all var(--transition-base);
  }

  .section-link:hover {
    gap: 0.75rem;
  }

  /* Skills Grid */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 1.5rem;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
    animation: fadeInUp 0.6s ease backwards;
  }

  .skill-card:hover {
    border-color: var(--color-accent-blue);
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .skill-icon {
    font-size: 2.5rem;
  }

  .skill-name {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  /* Featured Grid */
  .featured-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .featured-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-slow);
    position: relative;
    overflow: hidden;
  }

  .featured-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent-blue) 0%, var(--color-accent-green) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-slow);
  }

  .featured-card:hover {
    border-color: var(--color-accent-blue);
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }

  .featured-card:hover::before {
    transform: scaleX(1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .card-header svg {
    color: var(--color-text-tertiary);
    transition: all var(--transition-base);
    flex-shrink: 0;
  }

  .featured-card:hover .card-header svg {
    color: var(--color-accent-blue-light);
    transform: translate(2px, -2px);
  }

  .card-description {
    color: var(--color-text-tertiary);
    line-height: 1.6;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  /* Writeups List */
  .writeups-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .writeup-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-left: 3px solid transparent;
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-base);
  }

  .writeup-item:hover {
    border-left-color: var(--color-accent-blue);
    background: var(--color-bg-elevated);
    transform: translateX(4px);
  }

  .writeup-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 120px;
  }

  .writeup-platform,
  .writeup-difficulty {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    padding: 0.25rem 0.625rem;
    border-radius: var(--radius-sm);
    text-align: center;
  }

  .writeup-platform {
    background: rgba(83, 155, 245, 0.1);
    color: var(--color-accent-blue-light);
    border: 1px solid rgba(83, 155, 245, 0.2);
  }

  .writeup-difficulty {
    background: rgba(255, 255, 255, 0.05);
    font-weight: 600;
  }

  .writeup-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .writeup-description {
    color: var(--color-text-tertiary);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  .writeup-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag-small {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-muted);
  }

  /* CTA Section */
  .cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, rgba(83, 155, 245, 0.1) 0%, rgba(141, 219, 140, 0.05) 100%);
    border-top: 1px solid var(--color-border-default);
    border-bottom: 1px solid var(--color-border-default);
  }

  .cta-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .cta-content {
    text-align: center;
  }

  .cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .cta-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-text-tertiary);
    margin-bottom: 2.5rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.8s ease backwards;
  }

  .animate-slideUp {
    animation: fadeInUp 0.8s ease backwards;
  }

  .animate-slideUp:nth-child(2) {
    animation-delay: 0.1s;
  }

  .animate-slideUp:nth-child(3) {
    animation-delay: 0.2s;
  }

  .animate-slideUp:nth-child(4) {
    animation-delay: 0.3s;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .hero-container {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .hero-title {
      font-size: 2.75rem;
    }

    .featured-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 4rem 0 2rem;
    }

    .hero-title {
      font-size: 2.25rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .writeup-item {
      grid-template-columns: 1fr;
    }

    .writeup-meta {
      flex-direction: row;
    }
  }

  @media (max-width: 480px) {
    .hero-stats {
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .stat-divider {
      display: none;
    }

    .cta-title {
      font-size: 1.75rem;
    }
  }
</style>
