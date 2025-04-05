const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {
            fontFamily: {
                quicksand: ["Quicksand", "sans-serif"],
                slopes: ["slopes", "sans-serif"],
            },
            colors: {
                Sgold: {
                    400: "#7D5E19",
                },
                Sbeige: {
                    800: "#F5ECE5",
                },
            },
        },
    },

    plugins: [],
});
