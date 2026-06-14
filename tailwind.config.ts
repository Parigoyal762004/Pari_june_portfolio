import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Akro palette — warm, light, flat
        teal: "#59B292",
        golden: "#FFC94D",
        cream: "#FAE7CB",
        coral: "#FA6781",
        lavender: "#B9A7E0",
        mint: "#A8E0C5",
        peach: "#FFD2A8",
        plum: "#6B4E7A",
        sky: "#8FCBE3",
        ink: "#2B2620",
        "ink-soft": "#6B6258",
        paper: "#FBF6EE",
        "paper-2": "#F4ECDD",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      boxShadow: {
        soft: "0 16px 44px -28px rgba(43, 38, 32, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
