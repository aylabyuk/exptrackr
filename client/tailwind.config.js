const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: {
        20: '#91919F',
        40: '#E3E5E5',
        60: '#F1F1FA',
        80: '#FCFCFC',
        100: '#FFFFFF',
      },
      dark: {
        100:'#0D0E0F',
        75: '#161719',
        50: '#212325',
        25: '#292B2D',
      },
      violet: {
        100: '#7F3DFF',
        80: '#8F57FF',
        60: '#B18AFF',
        40: '#D3BDFF',
        20: '#EEE5FF',
      },
      blue: {
        100: '#0077FF',
        80: '#248AFF',
        60: '#57A5FF',
        40: '#8AC0FF',
        20: '#BDDCFF',
      },
      red: {
        100: '#FD3C4A',
        80: '#FD5662',
        60: '#FD6F7A',
        40: '#FDA2A9',
        20: '#FDD5D7',
      },
      green: {
        100: '#00A86B',
        80: '#2AB784',
        60: '#65D1AA',
        40: '#93EACA',
        20: '#CFFAEA',
      },
      yellow: {
        100: '#FCAC12',
        80: '#FCBB3C',
        60: '#FCCC6F',
        40: '#FCDDA1',
        20: '#FCEED4',
      }
    },
    fontSize: {
      titlex: ['64px', '80px'],
      title1: ['32px', '39px'],
      title2: '24px',
      title3: '18px',
      body1: '16px',
      body2: '16px',
      body3: ['14px', '18px'],
      small: ['13px', '16px'],
      tiny: ['12px', '12px']
    },
    extend: {
      fontFamily: {
        'sans': [ 'Inter', ...defaultTheme.fontFamily.sans ]
      }
    },
  },
  plugins: [],
}
