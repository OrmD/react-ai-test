import type { Config } from "tailwindcss";

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/core/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                mini: '375px',
                mobile: '576px',
                tablet: '768px',
                laptop: '1024px',
                medium: '1280px',
                desktop: '1440px',
                large: '1600px',
            },
        },},
    plugins: [],
} satisfies Config;