/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary 70s/80s mainframe palette
        'ibm-blue': '#3B6FA0',
        'vermillion': '#CC3333',
        'mustard': '#D4960A',
        'cream': '#E8DCC8',
        'sage': '#7A9E7E',
        'charcoal': '#2B2D33',
        'warm-orange': '#D65E2A',
        'teal': '#5BA8A0',
        'panel-light': '#F5F0E8',
        'panel-dark': '#1C1E24',
        // Theme-aware utilities (reference CSS vars)
        theme: {
          bg: 'var(--bg-primary)',
          surface: 'var(--bg-secondary)',
          terminal: 'var(--bg-terminal)',
          text: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          accent: 'var(--accent-primary)',
          'accent-2': 'var(--accent-secondary)',
          'accent-3': 'var(--accent-tertiary)',
          success: 'var(--accent-success)',
          warm: 'var(--accent-warm)',
          border: 'var(--border)',
          nav: 'var(--nav-bg)',
          'nav-text': 'var(--nav-text)',
          'card-1': 'var(--card-header-1)',
          'card-2': 'var(--card-header-2)',
          'card-3': 'var(--card-header-3)',
          dot: 'var(--dot-color)',
        },
        // Keep old names as aliases for backwards compat during migration
        'blue-terminal': '#3B6FA0',
        'orange-alert': '#CC3333',
        'gold-warning': '#D4960A',
        'navy-dark': '#2B2D33',
        'grid-paper': '#F5F0E8',
      },
      fontFamily: {
        display: ['LazenbyCompLiquid', 'monospace'],
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
