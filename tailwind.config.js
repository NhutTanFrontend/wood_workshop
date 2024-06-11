/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
		"./src/**/*.{html,js,ts,jsx,tsx,mdx}",
		"./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
	],
  theme: {
    screen: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // '2xl': '1536px',
    },
    extend: {
      // screens: {
      //   'xs': '480px',
      //   'sm': '640px',
      //   'md': '768px',
      //   'lg': '1024px',
      //   'xl': '1280px',
        // '2xl': '1600px',
      // },
      colors: {
        'main-brown-900': '#302924',
        'main-brown-900-70': "#3E3935",
        'main-brown-700': '#C89551',
        'main-brown-500': '#d4ad78',
        'main-brown-300': '#D3C2AE',
        'main-brown-200': '#F7F1E7'
      }
    },
  },
  plugins: [],
});

