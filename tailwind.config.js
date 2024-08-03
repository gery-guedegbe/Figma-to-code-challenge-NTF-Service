/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { raleway: ["Raleway", "sans-serif"] },
      colors: {
        "custom-neutral-50": "#E8E9EA",
        "custom-neutral-100": "#B8BABE",
        "custom-neutral-200": "#96989E",
        "custom-neutral-300": "#666A72",
        "custom-neutral-400": "#484D56",
        "custom-neutral-500": "#1A202C",
        "custom-neutral-600": "#181D28",
        "custom-neutral-700": "#0E1218",
        "custom-neutral-800": "#0B0D12",
      },
    },
  },
  plugins: [],
};
