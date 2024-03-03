import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",

      },
    },
    extend: {
      colors: {
        aboutgreen:"#B7D784",
        aboutblue:"#051070",
        aboutgray: "#E2E2E2",
        homeblue: "#051070",
        getstarted: "#051070",
        brandblack: "#758089",
        earngreen: 'rgba(38, 180, 3, 0.05)',
        spendgreen: 'rgba(0, 175, 84, 0.05)',
        spendlblue: 'rgba(38, 180, 3, 0.05)',
        spendblue: 'rgba(21, 40, 72, 1)',
        homeash: "rgba(5, 16, 112, 0.1)",
        socialash:'rgba(38, 180, 3, 0.05)',
        homelightgreen : "rgba(0, 175, 84, 0.09)",
        homemediumgreen: "rgba(0, 175, 84, 0.29)",
        earngreena:"rgba(0, 175, 84, 1)",
        businessblue:'rgba(0, 175, 84, 0.05)',
        helpblue:'rgba(21, 40, 72, 1)',
        homepink: "#F5AC72",
        homelightpink:"#F6E7DB",
        homelightpurple: "#F1ECF4",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        height: {
          '128': '42rem',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config