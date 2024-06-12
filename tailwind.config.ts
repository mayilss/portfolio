import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        8: "0.5rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        25: "1.5625rem",
        30: "1.875rem",
        35: "2.1875rem",
      },
      lineHeight: {
        default: "1.2",
      },
      colors: {
        turquoise: "#66d9ed",
        purple: "#740cdc",
      },
      backgroundImage: {
        home: "url('/images/home-bg.jpg')",
      },
      boxShadow: {
        glow: "inset 0 0 30px 0 #fff,inset 20px 0 30px #ffd400,inset -20px 0 30px red,inset 20px 0 300px #ff40d6,inset -20px 0 300px #e3ff4b,0 0 50px #fff,-10px 0 100px #fbff00,10px 0 80px #f55",
      },
      keyframes: {
        swing: {
          "0%, 100%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        swing: "swing 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
