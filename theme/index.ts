const theme = {
  colors: {
    primary: '#0087d1',
    orangeL1: '#FFCF53',
    white: '#fff',
    whiteD1: '#a0a0a0',
    outline: '#8ffcff',
    headerBackground: '#030708',
  },
  constants: {
    headerHeight: '64px',
    footerHeight: {
      xs: '200px',
      sm: '100px',
      md: '62px',
      lg: '62px',
    },
  },
  screens: {
    xs: '375px',
    sm: '768px',
    md: '1024px',
    lg: '1440px',
  },
};

export type Theme = typeof theme;

export default theme;
