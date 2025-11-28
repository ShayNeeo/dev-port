import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                retro: {
                    bg: "#1a1a1a", // Dark background
                    text: "#e0e0e0", // Off-white text
                    primary: "#ff0055", // Neon pink/red
                    secondary: "#00ff99", // Neon green
                    accent: "#00ccff", // Neon blue
                    yellow: "#ffcc00", // Retro yellow
                },
            },
            fontFamily: {
                retro: ["var(--font-vt323)", "monospace"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "scanline": "scanline 8s linear infinite",
                "flicker": "flicker 0.15s infinite",
            },
            keyframes: {
                scanline: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100%)" },
                },
                flicker: {
                    "0%": { opacity: "0.9" },
                    "50%": { opacity: "1.0" },
                    "100%": { opacity: "0.9" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
