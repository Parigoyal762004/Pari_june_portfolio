import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Akro palette, tuned for a dark-warm canvas
        teal: "#5FC7A4",
        golden: "#FFC94D",
        cream: "#241C15", // warm dark card surface
        coral: "#FA6781",
        lavender: "#C7B4F0",
        mint: "#A8E0C5",
        peach: "#FFD2A8",
        plum: "#C99AE6",
        sky: "#8FCBE3",
        ink: "#FBF6EE", // cream text
        "ink-soft": "#A89D8B", // warm muted text
        paper: "#171210", // deep warm near-black
        "paper-2": "#201913", // warm dark alt section
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(0, 0, 0, 0.6)",
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
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        marquee: "marquee 28s linear infinite",
        "pulse-ring": "pulse-ring 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
