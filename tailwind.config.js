import { fontFamily } from "tailwindcss/defaultTheme.js";

/** @type { import('tailwindcss').Config } */
export default {
	content: ["./public/**/*.{html,js}"],
	theme: {
		fontFamily: {
			display: ["Poppins"],
			sans: ["Inter", ...fontFamily.sans],
		},
	},
	plugins: [],
};
