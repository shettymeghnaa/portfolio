/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bfe0ff',
          300: '#93caff',
          400: '#5da8ff',
          500: '#2f86ff',
          600: '#1867db',
          700: '#134fb0',
          800: '#123f8c',
          900: '#123670',
        },
        ink: '#0b1020',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px 0 rgba(47, 134, 255, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 10% 10%, rgba(47,134,255,0.20), transparent 60%), radial-gradient(800px 400px at 90% 20%, rgba(29,78,216,0.18), transparent 55%)',
      },
    },
  },
  plugins: [],
}

