const tailwindConfig = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "titanium-dark": "#0B0F19",
        "cyber-blue": "#13BFFF",
        "neon-purple": "#A855F7",
        "fire-orange": "#FF8A00",
        "emerald-ahead": "#22C55E",
        "muted-gray": "#9CA3AF",
      },
      backgroundColor: {
        DEFAULT: "#0B0F19",
      },
    },
  },
};

export default tailwindConfig;
