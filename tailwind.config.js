module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
          "montserrat": ['"Montserrat"'],
          "noto-sans": ['"Noto Sans"'],
      },
      colors: {
        tahucyan: {
          400: "#44CED1",
        },
        tahupurple: {
          400: "#6F81FC",
        },
        tahublue: {
          400: "#25AFF9",
        },
        tahugreen: {
          400: "#65BA2C",
        },
        tahuyellow: {
          400: "#F4C413",
        },
        tahuorange: {
          400: "#FF734C",
        },
        tahured: {
          300: "#FF766C",
          400: "#FF4A3D",
          500: "#BF3329",
        },
        tahupink: {
          300: "#FFB1C8",
          400: "#FF6996",
          500: "#E52760",
        },
        light: {
          200: "#F6F6F6",
          300: "#E5E5E5",
          400: "#CFCFCF",
        },
        dark: {
          200: "#3F3D56",
          300: "#2F2E41",
          400: "#181617",
        },
      },
      height: {
        "vh-50": "50vh",
        "vh-60": "60vh",
        "vh-70": "70vh",
        "vh-80": "80vh",
        "vh-90": "90vh",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "3.5/10": "35%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "2px": "2px",
      },
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/2": "50%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "3.5/10": "35%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
