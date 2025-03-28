/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'media', // 'media' or 'class' for controlling dark mode
    theme: {
      extend: {
        colors: {
          // Extend the default Tailwind color palette
          purple: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
        spacing: {
          // Add custom spacing values if needed
        },
        borderRadius: {
          // Add custom border radius values if needed
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
        },
      },
    },
    plugins: [],
  };