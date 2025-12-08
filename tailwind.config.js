/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#224CFF',
        secondary: '#6A00FF',
        dark: '#0A0A0A',
        light: '#F5F5F5',
        surface: '#FFFFFF',
        'surface-dark': '#1A1A1A',
        success: '#00D68F',
        warning: '#FFAA00',
        error: '#FF3D71',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #224CFF 0%, #6A00FF 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'level-1': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'level-2': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'level-3': '0 12px 32px rgba(0, 0, 0, 0.12)',
        'level-4': '0 20px 64px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [],
}
