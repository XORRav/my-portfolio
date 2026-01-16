# Content Management Guide

## Adding New Writeups

### 1. Add Metadata to JSON

Edit `src/data/writeups.json` and add a new entry:

```json
{
  "id": 9,
  "title": "Your Writeup Title",
  "description": "Brief description that appears on the listing page",
  "difficulty": "Easy|Intermediate|Medium|Hard",
  "platform": "HackTheBox|TryHackMe|PortSwigger",
  "category": "Linux|Windows|Web|Active Directory|Binary Exploitation",
  "tags": ["tag1", "tag2", "tag3"],
  "date": "2025-01-16",
  "slug": "your-writeup-slug",
  "featured": false
}
```

### 2. Create Markdown Content

Create a new file: `static/writeups-content/your-writeup-slug.md`

The slug in the filename **must match** the slug in the JSON!

#### Example Markdown Template:

```markdown
## Overview

Brief overview of the machine/challenge.

**Target Information:**
* **IP:** 10.10.11.xxx
* **Difficulty:** Easy
* **OS:** Linux

## Reconnaissance

### Port Scanning

```bash
nmap -sC -sV -oA nmap/initial TARGET_IP
```

## Initial Access

Describe how you gained initial access...

## Privilege Escalation

Describe privilege escalation steps...

## Key Takeaways

1. Lesson learned
2. Another lesson
3. Security best practice

## Remediation

1. Fix suggestion
2. Security hardening tip
```

### 3. View Your Writeup

Navigate to: `http://localhost:5173/writeups/your-writeup-slug`

---

## Adding New Projects

### 1. Add to JSON

Edit `src/data/projects.json`:

```json
{
  "id": 7,
  "title": "Your Project Title",
  "description": "Detailed description of what your project does and the technologies used",
  "githubUrl": "https://github.com/username/repo",
  "demoUrl": "https://demo-url.com",
  "tags": ["tech1", "tech2", "tech3"],
  "date": "2025-01-16",
  "featured": false
}
```

**Fields:**
- `id`: Unique number
- `title`: Project name
- `description`: Detailed description (3-4 sentences recommended)
- `githubUrl`: **Required** - Link to GitHub repository
- `demoUrl`: **Optional** - Live demo URL
- `tags`: Array of technology tags
- `date`: ISO date format (YYYY-MM-DD)
- `featured`: true/false - appears on homepage if true

### 2. View Your Project

Projects will automatically appear on `/projects` page

---

## Markdown Syntax Reference

### Headers
```markdown
# H1 Header
## H2 Header
### H3 Header
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`inline code`
```

### Code Blocks
````markdown
```bash
command here
```

```python
code here
```
````

### Lists
```markdown
* Unordered item 1
* Unordered item 2

1. Ordered item 1
2. Ordered item 2
```

### Links
```markdown
[Link Text](https://url.com)
```

---

## Tips

1. **Featured Content**: Set `featured: true` to show items on the homepage
2. **Slug Format**: Use lowercase with hyphens (e.g., `htb-keeper`, `thm-sqli-deepdive`)
3. **Tags**: Keep tags lowercase and concise
4. **Images**: Place in `static/images/` and reference as `/images/filename.png`
5. **Code Blocks**: Always specify the language for syntax highlighting

---

## File Structure

```
my-portfolio/
├── src/
│   ├── data/
│   │   ├── projects.json          # Project metadata
│   │   └── writeups.json          # Writeup metadata
│   └── ...
├── static/
│   └── writeups-content/
│       ├── htb-keeper.md          # Markdown content
│       ├── thm-sqli-deepdive.md
│       └── your-writeup-slug.md   # Your new writeups here!
└── ...
```

---

## Common Issues

### Writeup not showing?
1. Check that the slug in JSON matches the filename
2. Ensure the markdown file is in `static/writeups-content/`
3. Restart the dev server

### Project not appearing?
1. Verify JSON syntax is valid (no trailing commas)
2. Check that all required fields are present
3. Refresh the browser

### Markdown not rendering correctly?
1. Ensure code blocks use triple backticks (```)
2. Check that there's a blank line before/after lists
3. Verify headers have space after # symbol
