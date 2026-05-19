/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'blue-terminal': '#1a5cff',
        'orange-alert': '#e85d3a',
        'gold-warning': '#d4a017',
        'navy-dark': '#1a1f36',
        'grid-paper': '#f4f6f8',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
