module.exports = {
  mode: 'jit',
  purge: {
    mode: 'all',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: (theme) => ({
        ...theme('fontSize')
      })
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      dark: '#1F1F1F',
      alto: '#D9D9D9',
      silver: '#C4C4C4',
      // TODO: fix duplicate hex colors
      primary: '#146DF6',
      success: '#28AA35',
      // ---------
      accent: '#F2F8FF',
      calypso: '#37658A',
      danube: '#599CD2',
      gray: '#878787',
      tangaroa: '#071B2B',
      scorpion: '#5E5D5D',
      concrete: '#F3F3F3',
      astronaut: '#255072',
      mandy: '#E3507A',
      gallery: '#EAEAEA',
      'link-water': '#e7f1f8',
      'deep-space-odyssey': '#18152e',
      'gigas': '#443C93',
      'malibu':'#8898FF',
      'rhino': '#383263'
    },
    fontFamily: {
      main: ['Roboto', 'sans-serif']
    },
    fontSize: {
      xs3: '0.625rem', //
      xs2: '0.6875rem', //
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.5rem', // 24px
      '4xl': '1.625rem', // 26px
      '5xl': '1.75rem', // 28px
      '6xl': '1.875rem', // 30px
      '7xl': '2rem', // 32px
      '8xl': '2.125rem', // 34px
      '9xl': '2.25rem', // 36px
      '10xl': '2.375rem', // 38px
      '11xl': '2.75rem' // 44px
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
