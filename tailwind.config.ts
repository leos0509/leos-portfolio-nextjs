import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          light: "#D9AFF5",
          base: "#944EC2",
          medium: "#5C0099",
          dark: "#3D0066",
        },
        yellow: {
          light: "#FFF9E5",
          base: "#FEDC66",
          medium: "#FDD133",
          dark: "#FDC500",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixelify-sans)", "sans"],
        "space-mono": ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        "cursor-blink": "blink 1s infinite",
        pressed: "pressed 0.1s",
        "bounce-left": "bounce-left 1s infinite",
        "bounce-right": "bounce-right 1s infinite",
        "fade-in-out": "fadeInOut 2s",
        "wave": "wave 1s infinite",
      },
      boxShadow: {
        hard: "4px 4px rgba(0, 0, 0, 0.3)",
        "hard-pressed": "2px 2px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        fadeInOut: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        }, 
        pressed: {
          "0%": {
            transform: "translateX(0) translateY(0)",
          },
          "100%": {
            transform: "translateX(2px) translateY(2px)",
          },
        },
        "bounce-left": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-10px)",
          },
        },
        "bounce-right": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(10px)",
          },
        },
        "wave": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-4px)",
          },
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
