/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",        // Incluye archivos en 'pages'
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",   // Incluye archivos en 'components'
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",          // Incluye archivos en 'app'
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",     // Ahora incluye archivos en 'features'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
