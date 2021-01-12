module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                logo: ['"Rock Salt"', "cursive"],
                sans:
                    'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            },
        },
    },
    variants: {
        extend: {
            // backgroundColor: ["active"],
        },
    },
    plugins: [],
};
