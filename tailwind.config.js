module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "card-taktahu": "url('/src/assets/svg/cards/CardTakTahu.svg')",
        "card-tahu": "url('/src/assets/svg/cards/CardTahu.svg')",
        "card-sobattahu": "url('/src/assets/svg/cards/CardSobatTahu.svg')",
        "card-sukadia": "url('/src/assets/svg/cards/CardSukaDia.svg')",
        "card-pacardia": "url('/src/assets/svg/cards/CardPacarDia.svg')",
        "card-yakindia": "url('/src/assets/svg/cards/CardYakinDia.svg')",
        "card-lucu": "url('/src/assets/svg/cards/CardLucu.svg')",
        "card-tantangan": "url('/src/assets/svg/cards/CardTantangan.svg')",
        "card-kolega": "url('/src/assets/svg/cards/CardKolega.svg')",
        "card-keluarga": "url('/src/assets/svg/cards/CardKeluarga.svg')",
        "card-diriku": "url('/src/assets/svg/cards/CardDiriku.svg')",
        "chat-right": "url('/src/assets/svg/ChatRight.svg')",
        "chat-left": "url('/src/assets/svg/ChatLeft.svg')",
        "chat-up": "url('/src/assets/svg/ChatUp.svg')",
        "hubungi-kami": "url('/src/assets/svg/AssetsHubungiKami.svg')",
        "hubungi-kami-mobile": "url('/src/assets/svg/AssetsHubungiKamiMobile.svg')",
      },
      fontFamily: {
        montserrat: ['"Montserrat"'],
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
      spacing: {
        108: "28rem",
        112: "32rem",
        128: "36rem",
        136: "40rem",
        142: "44rem",
        148: "48rem",
      },
      margin: {
        "1/10": "10%",
        "1.5/10": "15%",
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
      width: {
        "vw-30": "30vw",
        "vw-40": "40vw",
        "vw-50": "50vw",
        "vw-55": "55vw",
        "vw-60": "60vw",
        "vw-65": "65vw",
        "vw-70": "70vw",
        "vw-80": "80vw",
        "vw-90": "90vw",
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
      height: {
        "vh-30": "30vh",
        "vh-40": "40vh",
        "vh-50": "50vh",
        "vh-55": "55vh",
        "vh-60": "60vh",
        "vh-65": "65vh",
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
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
