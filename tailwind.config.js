/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "375px",
			tab: "768px",
			lg: "1024px",
			xl: "1440px",
		},
		extend: {},
	},
	plugins: [],
};
