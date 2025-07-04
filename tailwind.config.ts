import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        // xs: "520px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        darkBlue: "#030b72",
        lightblue: "#b6e0e7",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gradientblue: "rgba(var(--gradienteB))",
        purpleLanguage: "#390c5b",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        bookBlue: "#1A365D",
        bookOrange: "#2563EB",
        bookBrown: "#8B4513",
        bookLight: "#F8F9FA",
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
        bounceAndResize: {
          "0%": { transform: "scale(1, 1) translateY(0)" },
          "10%": { transform: "scale(1.1, .9) translateY(0)" },
          "30%": { transform: "scale(.9, 1.1) translateY(-50px)" },
          "50%": { transform: "scale(1.05, .95) translateY(0)" },
          "57%": { transform: "scale(1, 1) translateY(-7px)" },
          "64%": { transform: "scale(1, 1) translateY(0)" },
          "100%": { transform: "scale(1, 1) translateY(0)" },
        },
        bounceAndResize2: {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.05)" },
          "50%": { transform: "scale(0.95)" },
          "80%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bounceAndResize: "bounceAndResize 1s ease-in-out",
        bounceAndResize2: "bounceAndResize2 1s ease-in-out",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      large: "1400px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
