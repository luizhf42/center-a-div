const plugin = require("tailwindcss/plugin");

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
				"accent-blue": "#79c0ff",
				"gradient-start": "#19163f",
				"gradient-end": "#0b122b",
			},
			backgroundColor: {
				"primary-button": "#007ea7",
				"primary-button-hover": "#005f80",
				code: "#0d1117",
				"code-hover": "#161b22",
				disabled: "#636363",
			},

			width: {
				"9/10": "90%",
			},
			screens: {
				sm: "560px",
			},
		},
	},
};
