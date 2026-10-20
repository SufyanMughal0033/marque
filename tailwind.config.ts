import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF7F1",
          50: "#FFFFFF",
          100: "#FDFBF8",
          200: "#FAF7F1",
          300: "#F3EDE2",
          400: "#EAE1D0",
        },
        charcoal: {
          DEFAULT: "#211D1A",
          50: "#8A817A",
          100: "#6E645D",
          200: "#544B45",
          300: "#3C3530",
          400: "#28231F",
          500: "#211D1A",
          600: "#181512",
          700: "#100E0C",
        },
        champagne: {
          DEFAULT: "#D9C39A",
          50: "#F7F1E6",
          100: "#F0E6D2",
          200: "#E6D6B5",
          300: "#D9C39A",
          400: "#C9AD7C",
          500: "#B6935B",
        },
        bronze: {
          DEFAULT: "#8A6A45",
          50: "#C7AA82",
          100: "#B9976C",
          200: "#A6835A",
          300: "#8A6A45",
          400: "#6E5437",
          500: "#523E29",
        },
        stone: {
          DEFAULT: "#ACA69B",
          50: "#F1EFEB",
          100: "#E5E1D8",
          200: "#D1CABB",
          300: "#ACA69B",
          400: "#8C8579",
          500: "#6F695E",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.6rem, 2.8vw, 2.25rem)", { lineHeight: "1.1" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
        xl: "10px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(33, 29, 26, 0.18)",
        card: "0 2px 24px -6px rgba(33, 29, 26, 0.12)",
        lift: "0 24px 60px -20px rgba(33, 29, 26, 0.35)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "noise": "url('/images/texture-noise.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
