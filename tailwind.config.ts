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
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};
export default config;
