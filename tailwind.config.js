module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'}
      }
    }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
