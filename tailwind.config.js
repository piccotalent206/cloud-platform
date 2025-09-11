/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB", // Primary blue
          light: "#3B82F6",   // Lighter blue
          dark: "#1E40AF",    // Darker blue
        },
        background: {
          light: "#f8fbff",
          soft: "#eaf3ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Clean docs font
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        card: "0px 4px 8px rgba(0,0,0,0.1)", // for icon/document cards
        cardHover: "0px 8px 16px rgba(0,0,0,0.15)", 
      },
      borderRadius: {
        xl: "15px",
        "2xl": "20px",
      },
      transitionProperty: {
        "scale": "transform",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // for rich documentation styling
    require("@tailwindcss/forms"),      // for inputs if you add notes/forms
  ],
}
