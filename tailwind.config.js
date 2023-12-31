module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_b1: "#ffffffb1",
          A700_99: "#ffffff99",
          A700_63: "#ffffff63",
          A700_68: "#ffffff68",
          A700: "#ffffff",
          A700_2b: "#ffffff2b",
          A700_a1: "#ffffffa1",
          A700_6d: "#ffffff6d",
          A700_87: "#ffffff87",
          A700_05: "#fefefe05",
        },
        blue_gray: {
          100: "#d9d9d9",
          200: "#c0c5d3",
          300: "#959eab",
          700: "#34746d",
          800: "#1f4c41",
          900: "#2f2f2f",
          "100_26": "#d9d9d926",
          "900_02": "#303030",
          "900_01": "#333333",
          "800_3f": "#383e4a3f",
          "100_01": "#ced9dd",
          "200_01": "#abb6c3",
          "200_02": "#b9beca",
          "900_03": "#2e2e2e",
          "300_01": "#9aa3a9",
        },
        gray: {
          100: "#f5f5f5",
          300: "#dddddd",
          500: "#a3a3a3",
          600: "#808080",
          700: "#595959",
          800: "#393939",
          900: "#202020",
          "800_01": "#3f3f46",
          "900_19": "#20202019",
          "900_4f": "#2020204f",
          "900_63": "#23232363",
          "50_b1": "#fcfcfcb1",
          "900_26": "#23232326",
          "100_b1": "#f3f3f3b1",
          "600_61": "#82828261",
          "900_9b": "#2020209b",
          "100_03": "#f3f4f6",
          "100_02": "#f5f6fa",
          "900_5e": "#2020205e",
          "100_01": "#f4f4f4",
          "900_30": "#20202030",
          "400_00": "#bdbdbd00",
          "700_01": "#5a5a5a",
          "900_70": "#23232370",
          "900_35": "#20202035",
          "600_94": "#82828294",
          "700_61": "#59595961",
          "600_14": "#82828214",
          "500_01": "#999999",
          "500_02": "#8f959e",
          "700_14": "#59595914",
          "900_02": "#141414",
          "900_03": "#232323",
          "900_47": "#29292947",
          "900_04": "#272626",
          "900_05": "#292929",
          "600_01": "#717171",
          "900_01": "#272727",
          "900_47_01": "#23232347",
          "900_06": "#171717",
          "900_07": "#1d1e20",
        },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_87": "#00000087",
          "900_01": "#250303",
          "900_00": "#00000000",
          "900_49": "#00000049",
          "900_c1": "#000000c1",
          "900_19": "#00000019",
          "900_14": "#00000014",
          "900_d3": "#000000d3",
          "900_66": "#00000066",
          "900_61": "#00000061",
          "900_63": "#00000063",
          "900_6d": "#0000006d",
          "900_2b": "#0000002b",
        },
        deep_purple: { A200: "#a855f7" },
        red: { 500: "#ff2b2b", A700: "#ff0000" },
        yellow: { 200: "#ffee9a" },
        teal: {
          800: "#136760",
          A700: "#00d0aa",
          A400_01: "#00fbce",
          A400_02: "#05d9b3",
          A400: "#00e9bf",
        },
        green: { 800: "#2d9808", "800_66": "#2d980866" },
        cyan: { 700: "#00a79b" },
      },
      fontFamily: {
        plusjakartasans: "Plus Jakarta Sans",
        inter: "Inter",
        barlow: "Barlow",
        adamina: "Adamina",
        alatsi: "Alatsi",
      },
      boxShadow: {
        bs14: "0px 4px  4px 0px #0000003f",
        bs6: "inset 4.13px -8.26px  15px 0px #ffffff68",
        bs7: "4px 4px  8px 4px #2d980866",
        bs3: "6px 8px  9px 0px #0000003f",
        bs12: "0px 40px  100px -15px #383e4a3f",
        bs: "0px 4px  16px 0px #00000019",
        bs13: "7px 21px  36px 0px #000000",
        bs5: "9px 10px  8px 0px #0000003f",
        bs4: "11px 11px  8px 0px #0000003f",
        bs10: "21px 39px  37px 0px #0000002b",
        bs2: "33px 41px  42px 0px #000000c1",
        bs8: "5px 24px  52px 0px #00000049",
        bs9: "31px 26px  73px 0px #00000049",
        bs11: "33px 41px  23px 0px #00000000",
        bs1: "33px 41px  37px 0px #00000049",
      },
      textShadow: { ts: "33px 41px  37px #00000049" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000000,#000000d3)",
        gradient1: "linear-gradient(270deg ,#000000,#00000000)",
        gradient2: "linear-gradient(180deg ,#ffffffb1,#fcfcfcb1,#f3f3f3b1)",
        gradient3: "linear-gradient(180deg ,#00fbce,#bdbdbd00)",
        gradient4: "radial-gradient(#595959,#82828294,#00000000)",
        gradient5: "radial-gradient(#59595914,#82828214,#00000014)",
        gradient6: "radial-gradient(#59595961,#82828261,#00000061)",
        gradient7: "radial-gradient(#ff0000,#250303)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
