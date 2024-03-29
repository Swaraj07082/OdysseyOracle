/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./app/**/*.{js,jsx}",
  "./src/**/*.{js,jsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  screens: {
    "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }
    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }
    lg: { max: "1024px" },
    // => @media (max-width: 1023px) { ... }
    md: { max: "768px" },
    // => @media (max-width: 767px) { ... }
    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }
    cs: { max: "375px" },

    sms: { min: "640px" },
  },
  fontFamily: {
    "grotesque":["Courier New"],
    "halyard":["__Inter_aaf875"]
  },
  extend: {
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
