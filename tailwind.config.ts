import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        jet: ["var(--font-plex)"],
      },
      colors: {
        bermuda: {
          "50": "#eefbf7",
          "100": "#cbf6ea",
          "200": "#9eebd8",
          "300": "#6bdbc3",
          "400": "#3dbda5",
          "500": "#24a38e",
          "600": "#1b8375",
          "700": "#19665d",
          "800": "#18534b",
          "900": "#19433e",
          "950": "#082624",
        },

        neo: {
          "50": "hsl(124, 100%, 97%)",
          "100": "hsl(126, 100%, 92%)",
          "200": "hsl(125, 100%, 85%)",
          "300": "hsl(126, 100%, 69%)",
          "400": "hsl(126, 91%, 58%)",
          "500": "hsl(126, 92%, 45%)",
          "600": "hsl(126, 99%, 36%)",
          "700": "hsl(127, 93%, 29%)",
          "800": "hsl(127, 84%, 24%)",
          "900": "hsl(128, 81%, 20%)",
          "950": "hsl(128, 100%, 10%)",
        },
        portage: {
          "50": "#e7efff",
          "100": "#dae4ff",
          "200": "#bcccff",
          "300": "#91a9ff",
          "400": "#7e8bff",
          "500": "#6065f0",
          "600": "#4d45e3",
          "700": "#4238c7",
          "800": "#36319b",
          "900": "#312e7a",
          "950": "#1e1b46",
        },

        lavender: {
          "50": "hsl(280, 82%, 98%)",
          "100": "hsl(274, 91%, 95%)",
          "200": "hsl(278, 83%, 91%)",
          "300": "hsl(281, 82%, 83%)",
          "400": "hsl(281, 81%, 77%)",
          "500": "hsl(281, 75%, 61%)",
          "600": "hsl(282, 61%, 49%)",
          "700": "hsl(284, 65%, 40%)",
          "800": "hsl(284, 62%, 33%)",
          "900": "hsl(285, 57%, 28%)",
          "950": "hsl(285, 80%, 16%)",
        },
        mako: {
          "50": "hsl(240, 7%, 92%)",
          "100": "hsl(270, 7%, 89%)",
          "200": "hsl(266, 7%, 81%)",
          "300": "hsl(267, 7%, 69%)",
          "400": "hsl(262, 7%, 53%)",
          "500": "hsl(263, 6%, 43%)",
          "600": "hsl(265, 7%, 35%)",
          "700": "hsl(267, 7%, 26%)",
          "800": "hsl(274, 7%, 21%)",
          "900": "hsl(270, 4%, 18%)",
          "950": "hsl(260, 8%, 5%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
