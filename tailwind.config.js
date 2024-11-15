// tailwind.config.js
import scrollbarHide from 'tailwind-scrollbar-hide'; // Import the plugin

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust based on your project
  theme: {
    extend: {
      colors: {
        scrollbarThumb: '#5a5a5a',
        scrollbarThumbHover: '#7a7a7a',
        scrollbarTrack: '#2d2d2d',
      },
  },
},
  plugins: [scrollbarHide],
}
