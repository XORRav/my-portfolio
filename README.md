# ProXxNebula's Portfolio

A personal portfolio website documenting my journey in cybersecurity, CTF writeups, and homelab experiments.

## About This Project

This website serves as a digital journal for sharing my learning journey in:

- **CTF Writeups** - Walkthroughs of Capture The Flag challenges from platforms like HackTheBox, TryHackMe, and PortSwigger
- **Homelab Documentation** - Technical guides and configurations for my home server infrastructure
- **Projects** - Personal development projects and experiments

## Tech Stack

### Frontend
- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **CSS Custom Properties** - For theming (dark/light mode)

### Content Management
- **Markdown** - Content is written in markdown files with frontmatter
- **Static Files** - No database required, content lives in the repository

### Design
- **Cyberpunk Theme** - Purple and cyan accent colors with neon glow effects
- **Responsive Design** - Mobile-first approach
- **Reader Mode** - Optimized for long-form technical content

### Development Tools
- **[Claude Code](https://claude.ai/claude-code)** - AI-powered coding assistant by Anthropic
- **Vite** - Build tool and dev server

## Features

- Dark/Light mode toggle
- Auto-generated Table of Contents for articles
- Reading time estimates
- Font size controls for accessibility
- Focus mode for distraction-free reading
- Sticky navigation for easy back-navigation
- Responsive design for all devices
- Syntax highlighting for code blocks

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   └── utils/          # Utility functions
├── routes/
│   ├── +page.svelte    # Homepage
│   ├── projects/       # Projects listing
│   ├── writeups/       # CTF writeups
│   └── homelab/        # Homelab documentation
└── app.css             # Global styles and theme
static/
├── writeups-content/   # Markdown files for writeups
└── homelab-content/    # Markdown files for homelab docs
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ProXxNebula/my-portfolio.git

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
npm run preview
```

## Adding Content

### Writeups
Create a new markdown file in `static/writeups-content/` with frontmatter:

```markdown
---
title: "Challenge Name"
platform: "HackTheBox"
difficulty: "Medium"
category: "Web"
date: "2024-01-15"
description: "Brief description of the challenge"
tags: ["xss", "sql-injection"]
---

Your writeup content here...
```

### Homelab Documentation
Create a new markdown file in `static/homelab-content/` with frontmatter:

```markdown
---
title: "Service Name"
category: "Networking"
difficulty: "intermediate"
hardware: "Proxmox VE"
publishedDate: "2024-01-15"
description: "What this documentation covers"
services: ["Docker", "Nginx"]
tags: ["self-hosted", "linux"]
---

Your documentation here...
```

## License

This project is open source and available for personal use and learning purposes.

## Connect

- GitHub: [@ProXxNebula](https://github.com/ProXxNebula)

---

Built with SvelteKit and Claude Code
