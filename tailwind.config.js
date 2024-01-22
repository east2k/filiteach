/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "mantis": {
                    50: "#fff8ed",
                    100: "#feefd6",
                    200: "#fddaab",
                    300: "#fbbf76",
                    400: "#f8993f",
                    500: "#f68529",
                    600: "#e66110",
                    700: "#bf490f",
                    800: "#983a14",
                    900: "#7a3214",
                    950: "#421708",
                },
                mantis: {
                    50: "#f4fbf2",
                    100: "#e7f7e1",
                    200: "#cdeec4",
                    300: "#a5e095",
                    400: "#75c95f",
                    500: "#5dc143",
                    600: "#3f8f2a",
                    700: "#337124",
                    800: "#2c5a21",
                    900: "#254a1d",
                    950: "#10280b",
                },
                shark: {
                    50: "#f7f7f8",
                    100: "#efeef0",
                    200: "#dcd9de",
                    300: "#bcb8c1",
                    400: "#97929e",
                    500: "#7a7483",
                    600: "#635e6b",
                    700: "#514d57",
                    800: "#46424a",
                    900: "#3d3a40",
                    950: "#252327",
                },
            },
        },
    },
    plugins: [],
};
