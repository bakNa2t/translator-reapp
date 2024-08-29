/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        russoOne: ["Russo One", "sans-serif"],
        righteous: ["Righteous", "sans-serif"],
        shojumaru: ["Shojumaru", "system-ui", "sans-serif"],
        notoSansJp: ["Noto Sans JP", "sans-serif"],
      },
      dropShadow: {
        text_2_cyan: "0 0 2px #30cfd0",
        text_2_purple: "0 0 2px #6914c3",
      },
      boxShadow: {
        sd_1: "0 3px 4px 0 rgba(155,244,239, 0.3), 0 3px 4px 0 rgba(155,244,239, 0.12)",
      },
      translate: ["active"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
