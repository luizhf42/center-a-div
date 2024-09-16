/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,css,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["SUSE", "sans-serif"],
			},
      backgroundColor: {
        default: "#0b122b",
      }
		},
		plugins: [],
	},
};
