import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./store/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        "bg-alt": "rgb(var(--bg-alt-rgb) / <alpha-value>)",
        paper: "rgb(var(--paper-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-deep": "rgb(var(--accent-deep-rgb) / <alpha-value>)",
        "status-green": "rgb(var(--status-green-rgb) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1400px",
      },
      letterSpacing: {
        tightish: "-0.02em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
} satisfies Config;
