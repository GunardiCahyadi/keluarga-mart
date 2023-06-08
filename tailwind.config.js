import { fontFamily } from "tailwindcss/defaultTheme.js";

/** @type { import('tailwindcss').Config } */
export default {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				xs: "448px",
			},
		},
		fontFamily: {
			display: ["Poppins"],
			sans: ["Inter", ...fontFamily.sans],
		},
	},
	plugins: [],
};
