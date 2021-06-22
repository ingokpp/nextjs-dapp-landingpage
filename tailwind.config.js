const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                contrast: "#335BCF",
                gray: colors.blueGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
