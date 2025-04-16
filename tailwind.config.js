/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'float-rapid': 'float 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 15s linear infinite',
        'spin-reverse': 'spin-reverse 10s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit-reverse 25s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'aurora': 'aurora 10s ease infinite',
        'glitch': 'glitch 5s ease-in-out infinite',
        'fade-in-out': 'fade-in-out 3s ease-in-out infinite',
        'modal-entry': 'modal-entry 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'blur-in': 'blur-in 0.7s forwards',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'hologram-flicker': 'hologram-flicker 6s infinite',
        'slide-up': 'slide-up 0.7s ease-out forwards',
        'quantum-bounce': 'quantum-bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite',
        'dimensional-shift': 'dimensional-shift 8s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '25%': {
            'background-size': '400% 400%',
            'background-position': 'right top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom',
          },
          '75%': {
            'background-size': '200% 200%',
            'background-position': 'left bottom',
          },
        },
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'spin-reverse': {
          'to': { transform: 'rotate(-360deg)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(0deg) translateX(70px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(70px) rotate(360deg)' },
        },
        'morph': {
          '0%, 100%': { 'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { 'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { 'border-radius': '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { 'border-radius': '60% 40% 60% 30% / 60% 40% 60% 30%' },
        },
        'aurora': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        'modal-entry': {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'blur-in': {
          '0%': { filter: 'blur(12px)', opacity: 0 },
          '100%': { filter: 'blur(0)', opacity: 1 },
        },
        'neon-pulse': {
          '0%, 100%': { textShadow: '0 0 4px #fff, 0 0 8px #fff, 0 0 12px #00b3ff, 0 0 16px #00b3ff, 0 0 30px #00b3ff' },
          '50%': { textShadow: '0 0 4px #fff, 0 0 6px #fff, 0 0 8px #00b3ff, 0 0 10px #00b3ff, 0 0 20px #00b3ff' },
        },
        'hologram-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: 1 },
          '20%, 24%, 55%': { opacity: 0.8 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'quantum-bounce': {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(-25px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        'dimensional-shift': {
          '0%, 100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'perspective(1000px) rotateX(10deg) rotateY(5deg)' },
          '50%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(10deg)' },
          '75%': { transform: 'perspective(1000px) rotateX(-10deg) rotateY(5deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
        'mesh-grid': 'linear-gradient(to right, #80808005 1px, transparent 1px), linear-gradient(to bottom, #80808005 1px, transparent 1px)',
        'mesh-dots': 'radial-gradient(circle, #ffffff05 1px, transparent 1px)',
        'hologram-grid': 'linear-gradient(to right, #00b3ff06 1px, transparent 1px), linear-gradient(to bottom, #00b3ff06 1px, transparent 1px)',
        'cyber-grid': 'linear-gradient(to right, #00b3ff08 1px, transparent 1px), linear-gradient(to bottom, #00ffaa08 1px, transparent 1px)',
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 200, 255, 0.3), 0 0 20px rgba(0, 200, 255, 0.2)',
        'glow-lg': '0 0 20px rgba(0, 200, 255, 0.4), 0 0 40px rgba(0, 200, 255, 0.2)',
        'glow-sm': '0 0 5px rgba(0, 200, 255, 0.3), 0 0 10px rgba(0, 200, 255, 0.2)',
        'glow-purple': '0 0 10px rgba(125, 90, 255, 0.3), 0 0 20px rgba(125, 90, 255, 0.2)',
        'neon-cyan': '0 0 5px #00b3ff, 0 0 10px #00b3ff, 0 0 15px #00b3ff, 0 0 20px #00b3ff',
        'neon-purple': '0 0 5px #7d5aff, 0 0 10px #7d5aff, 0 0 15px #7d5aff, 0 0 20px #7d5aff',
        'neon-green': '0 0 5px #00ffaa, 0 0 10px #00ffaa, 0 0 15px #00ffaa, 0 0 20px #00ffaa',
        'neon-pink': '0 0 5px #ff00aa, 0 0 10px #ff00aa, 0 0 15px #ff00aa, 0 0 20px #ff00aa',
        'neon-white': '0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ffffff',
        'hologram': '0 0 15px rgba(0, 179, 255, 0.5), 0 0 30px rgba(0, 179, 255, 0.3)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.37, 0, 0.63, 1)',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '80px',
        '5xl': '100px',
      },
    },
  },
  plugins: [],
};