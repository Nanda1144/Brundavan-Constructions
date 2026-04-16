/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0A1F44",
          gold: "#D4AF37",
          light: "#F5F7FA",
          dark: "#050F22",
        }
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "scale-up": "scaleUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        }
      }
    },
  },
  plugins: [],
}
