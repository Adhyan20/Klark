import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			dark:{
				1: '#1C1F2E',
				2: '#161925',
				3: '#36454F'
			},
			blue:{
				1: '#40E0D0',
			},
			sky:{
				1: 	'#C19A6B',
				2:  '#ECF0FF',
				3:  '#F5FCFF',
			},
			orange:{
				1: '#FF742E',
			},
			purple: {
				1: '#830EF9',
			},
			yellow:{
				1: '#F9A90E',
			},
  		},
		backgroundImage: {
			hero: "url('/images/hero-background.jpg')",
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
