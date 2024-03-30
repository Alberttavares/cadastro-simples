/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: {
		
		content: [
			'./app/**/*.{js,ts,tsx,jsx,mdx}',
			'./components/**/*.{js,ts,tsx,jsx,mdx}',
			'./pages/**/*.{js,ts,jsx,tsx}'
		],
		safeList: [
			/^bg-/,
			/^to-/,
			/^from-/,

		]
	},
	theme: {
	  extend: {},
	},
	plugins: [],
  }