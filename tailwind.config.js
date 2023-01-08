/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1444px'
    },
    extend: {
      colors: {
        cafeClaro: '#FFEFEF',
        naranjaClaro: '#ff7b5e',
        naranjaOpaco: '#f0522f',
        articulo: '#ffffff33',
        grisRojizo: '#f0e4e9',
        cafeTransparente1: '#e6cfc195',
        cafeTransparente2: '#e6cfc135',
        rosaPastel: '#f08ddf',
        rojoOscuro: '#7f1d1d',
      },
    },
  },
  plugins: [],
}
