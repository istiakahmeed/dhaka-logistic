import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-brand": "var(--green)",
        "green-dark": "var(--green-dark)",
        "green-glow": "var(--green-glow)",
        charcoal: "var(--charcoal)",
        "charcoal-mid": "var(--charcoal-mid)",
        "charcoal-card": "var(--charcoal-card)",
        "charcoal-border": "var(--charcoal-border)",
        "white-brand": "var(--white)",
        "white-dim": "var(--white-dim)",
        "white-faint": "var(--white-faint)",
      },
      fontFamily: {
        condensed: ["var(--font-condensed)"],
        barlow: ["var(--font-barlow)"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.1" }],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(109, 190, 69, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109, 190, 69, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "60px 60px",
      },
      animation: {
        counter: "counter 0.6s ease-out forwards",
      },
      keyframes: {
        counter: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
