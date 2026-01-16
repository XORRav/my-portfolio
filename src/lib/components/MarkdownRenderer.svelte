<script lang="ts">
  import { onMount } from 'svelte';

  export let content: string = '';

  let htmlContent = '';

  // Simple markdown to HTML converter
  function parseMarkdown(markdown: string): string {
    let html = markdown;

    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      return `<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Unordered lists
    html = html.replace(/^\* (.+)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Ordered lists
    html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>');

    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/^(?!<[hup]|<pre|<code|<li)(.*)/gim, '<p>$1</p>');

    // Clean up
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>(<h[1-6]>)/g, '$1');
    html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
    html = html.replace(/<p>(<pre>)/g, '$1');
    html = html.replace(/(<\/pre>)<\/p>/g, '$1');
    html = html.replace(/<p>(<ul>)/g, '$1');
    html = html.replace(/(<\/ul>)<\/p>/g, '$1');

    return html;
  }

  function escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  $: htmlContent = parseMarkdown(content);
</script>

<div class="markdown-content">
  {@html htmlContent}
</div>

<style>
  .markdown-content {
    line-height: 1.8;
    color: var(--color-text-secondary);
  }

  .markdown-content :global(h1) {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--color-border-default);
  }

  .markdown-content :global(h2) {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--color-border-default);
  }

  .markdown-content :global(h3) {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  .markdown-content :global(p) {
    margin-bottom: 1rem;
    line-height: 1.8;
  }

  .markdown-content :global(a) {
    color: var(--color-accent-blue);
    text-decoration: none;
    transition: color var(--transition-base);
  }

  .markdown-content :global(a:hover) {
    color: var(--color-accent-blue-light);
    text-decoration: underline;
  }

  .markdown-content :global(strong) {
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .markdown-content :global(em) {
    font-style: italic;
  }

  .markdown-content :global(code) {
    font-family: var(--font-mono);
    font-size: 0.9em;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    padding: 0.2rem 0.4rem;
    border-radius: var(--radius-sm);
    color: var(--color-accent-blue-light);
  }

  .markdown-content :global(pre) {
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  .markdown-content :global(pre code) {
    background: transparent;
    border: none;
    padding: 0;
    font-size: var(--font-size-sm);
    color: var(--color-accent-green);
    line-height: 1.7;
  }

  .markdown-content :global(ul),
  .markdown-content :global(ol) {
    margin: 1rem 0 1.5rem 0;
    padding-left: 2rem;
  }

  .markdown-content :global(li) {
    margin-bottom: 0.5rem;
    line-height: 1.7;
  }

  .markdown-content :global(li::marker) {
    color: var(--color-accent-blue);
  }

  .markdown-content :global(blockquote) {
    border-left: 3px solid var(--color-accent-blue);
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    color: var(--color-text-tertiary);
    font-style: italic;
  }
</style>
