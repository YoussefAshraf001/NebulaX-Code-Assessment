/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bacteria: {
          "0%": {
            transform: "scale(1) translateX(0) translateY(0)",
          },
          "25%": {
            transform: "scale(1.1) translateX(30px) translateY(-20px)",
          },
          "50%": {
            transform: "scale(1.2) translateX(-20px) translateY(30px)",
          },
          "75%": {
            transform: "scale(1.15) translateX(40px) translateY(-25px)",
          },
          "100%": {
            transform: "scale(1) translateX(0) translateY(0)",
          },
        },
      },
      animation: {
        bacteria: "bacteria 8s ease-in-out infinite",
      },
      clipPath: {
        bacteria:
          "polygon(30% 0%, 60% 10%, 90% 30%, 100% 60%, 80% 90%, 60% 100%, 40% 90%, 20% 60%, 0% 40%, 10% 20%)", // Irregular bacteria-like shape
      },
    },
  },
  plugins: [],
};
