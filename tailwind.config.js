/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          // ... other shades
          900: "#0c4a6e",
        },
        // Add more custom colors as needed
      },
      fontFamily: {
        // Add custom fonts if needed
      },
      spacing: {
        // Add custom spacing if needed
      },
      borderRadius: {
        // Add custom border radius if needed
      },
      // Add other theme extensions as needed
      animation: {
        "slide-left": "slide-left 12s linear infinite",
      },
      keyframes: {
        "slide-left": {
          from: { transform: translateX },
          to: { transform: "translateX(-1480px)" },
        },
      },
    },
  },
  plugins: [],
};
