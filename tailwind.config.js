/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        base: 'var(--color-base)',
        dark: 'var(--color-dark)',
      },
    },
  },
  plugins: [],
};
