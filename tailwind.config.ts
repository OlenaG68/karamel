import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "first-block-bg": "url(/images/first-block-bg.jpg)",
                "mission-bg": "url(/images/mission-bg.jpg)",
                "ads-bg": "url(/images/ads.jpg)",
            },
            colors: {
                black: "#000000",
                white: "#ffffff",
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};
export default config;
