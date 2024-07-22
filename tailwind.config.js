/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
     'sm': {'min': '320px', 'max': '1279px'}, // Mobile phones and tablets (up to 1279px)
        'lg': {'min': '1280px'}, // Desktops and larger (1280px and above)
      },
     
      rotate: {
        '270': '270deg', // Adding 90 degrees rotation
      },
      transformOrigin: {
        'base': 'bottom center', // Custom origin point
      },
      variants: {
        extend: {
          rotate: ['responsive'], // Ensure rotate variants are responsive
        },
        
      },
    },
  },
  plugins: [],
};

