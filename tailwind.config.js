module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#070d1c', 900: '#0b1430', 800: '#102047', 700: '#1a2f63' },
        steel: { 500: '#3d6fc4', 400: '#5b8bd9', 300: '#8bb0e8' },
        accent: '#00d4ff',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
};
