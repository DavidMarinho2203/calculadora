import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "sm": "320px",
        "md": "640px",
        "lg": "768px",
        "xl": "1024px",
        "2xl": "1280px"
      },
      colors: {
        gray: {
          'primary': '#4F4F4F',
          'secondary': '#2F2F2F',
          'tertiary': '#8D8C8C',
          'quaternary': '#747474',
        },
        orange: {
          'primary': '#E1813D',
        },
        red: {
          'primary': '#FF0000',
        },
        blue: {
          'primary': '#0185CE',
        },
        white: {
          'primary': '#FFFFFF',
        },
        dark: {
          background: '#1a1a1a',
          text: '#f0f0f0',
        }
      }
    },
  },
  plugins: [
    function main({ addUtilities, theme }: any) {
      const colors = theme('colors')
      const newUtilities = {
        '#main': {
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.blue['primary']
        },
        '#main_calculator': {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "36px 20px",
          gap: "30px",
          backgroundColor: colors.blue['primary']
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    function button_Start({ addUtilities, theme }: any) {
      const colors = theme('colors')
      const newUtilities = {
        '#btn_Start': {
          backgroundColor: colors.orange['primary'],
          color: colors.white['primary'],
          padding: '1rem 2rem',
          borderRadius: '10px',
          border: 'none',
          "&:hover": {
            backgroundColor: colors.white['primary'],
            color: colors.orange['primary'],
          }
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    function Calculator({ addUtilities, theme }: any) {
      const colors = theme('colors')
      const newUtilities = {
        '#local_calculator': {
          width: '350px',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          padding: '36px 20px',
          backgroundColor: colors.gray['primary'],
          borderRadius: '30px',
          gap: '30px',
        },
        '#local_Response': {
          fontSize: '24px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '70px',
          width: '100%',
          backgroundColor: colors.gray['secondary'],
          borderRadius: '20px',
          heigth: '70px',
        },

        '#Response': {
          width: '100%',
          color: colors.white['primary'],
          fontSize: '1.6em',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          backgroundColor: colors.gray['secondary'],
          borderRadius: '20px',
          heigth: '70px',
          padding: '10px',
          textAlign: 'right'
        },

        '#my-grid': {
          display: 'grid',
          gridTemplateAreas: `
          "C delete to-divide multiply"
          "seven eight nine subtract"
          "four five six sum"
          "one two three equal"
          "zero zero point equal"
        `,
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(5,60px)',
          gap: '8px',
          width: '100%',
        },

        '.grid-area-1': {
          gridArea: 'C',
        },

        '.grid-area-2': {
          gridArea: 'delete',
        },

        '.grid-area-3': {
          gridArea: 'to-divide',
        },

        '.grid-area-4': {
          gridArea: 'multiply',
        },

        '.grid-area-5': {
          gridArea: 'seven',
        },

        '.grid-area-6': {
          gridArea: 'eight',
        },

        '.grid-area-7': {
          gridArea: 'nine',
        },

        '.grid-area-8': {
          gridArea: 'subtract',
        },

        '.grid-area-9': {
          gridArea: 'four',
        },

        '.grid-area-10': {
          gridArea: 'five',
        },

        '.grid-area-11': {
          gridArea: 'six',
        },

        '.grid-area-12': {
          gridArea: 'sum',
        },

        '.grid-area-13': {
          gridArea: 'one',
        },

        '.grid-area-14': {
          gridArea: 'two',
        },

        '.grid-area-15': {
          gridArea: 'three',
        },

        '.grid-area-16': {
          gridArea: 'zero',
        },

        '.grid-area-17': {
          gridArea: 'point',
        },

        '.grid-area-18': {
          gridArea: 'equal',
        },

        '.btn': {
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '5px',
          fontSize: '1.8em',
          color: colors.white['primary'],
          '&:hover': { // ao passar o mouse
            backgroundColor: 'transparent',
            border: '1px solid',
            borderColor: colors.white['primary'],
          }
        },
        '.btn-padrao1': {
          backgroundColor: colors.orange['primary'],
        },
        '.btn-padrao2': {
          backgroundColor: colors.gray['tertiary'],
        },
        '.btn-padrao3': {
          backgroundColor: colors.gray['quaternary'],
        },

      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
export default config;
