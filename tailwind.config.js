/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
			colors: {
				primary: "#25252B",
				secondary: "#636376",
				text: "#25252B",
				success: "#75AD42",
				succesbg: "#DDEBD0",
				processbg: "#FFF4CC",
				process: "#E5B300",
			},
		},
        fontSize: {
            xs: "14px",
            base: "16px",
            lg: "20px",
            xl: "24px",
            "2xl": "32px",
            "3xl": "64px",
            "4xl": "96px",
        },
    },

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#25252B",
                    secondary: "#636376",
                    "base-100": "#EFEFEF" /* background image */,
                },
            },
            "dark",
        ],
    },
    plugins: [require("daisyui")],
};
