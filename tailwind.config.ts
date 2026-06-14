import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#0AD3E8",
        golden: "#FBBF24",
        cream: "#1E293B",
        coral: "#FF2E93",
        lavender: "#8B5CF6",
        mint: "#10B981",
        peach: "#F97316",
        plum: "#C084FC",
        sky: "#3B82F6",
        ink: "#F3F4F6",
        "ink-soft": "#9CA3AF",
        paper: "#0A0F1D",
        "paper-2": "#131A2E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(43, 38, 32, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
