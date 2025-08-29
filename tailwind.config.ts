import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      backgroundImage: {
        grid: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        vignette:
          "radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.55) 100%)",
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.25)",
      },
      colors: {
        base: {
          50: "#f8f8f8",
          100: "#f1f1f1",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,255,255,0.08)" },
          "50%": { boxShadow: "0 0 0 8px rgba(255,255,255,0.02)" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
