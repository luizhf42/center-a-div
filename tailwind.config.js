/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,css,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["SUSE", "sans-serif"],
			mono: ["JetBrains Mono", "monospace"],
			},
			colors: {
				"gradient-start": "#19163f",
				"gradient-end": "#0b122b",
				button: "#007ea7",
				"button-hover": "#005f80",
			},
		},
		plugins: [],
	},
};
