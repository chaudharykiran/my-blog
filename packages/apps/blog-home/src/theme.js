import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const font = {
  xxLarge: '2.125rem',
  xLarge: '1.6rem',
  // font sizes frequentily used
  large: '1.2rem',
  medium: '1rem',
  regular: '.875rem',
  small: '.75rem',
  tiny: '.675rem',
  light: 300,
  semiBold: 600,
  bold: 700,
}

// theme object
const theme = createMuiTheme({
  // font object
  font,

  // Typography setting
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    // useNextVariants: true,

    h1: {
      fontSize: '6rem',
      fontWeight: font.light,
    },

    h2: {
      fontSize: '3.75rem',
      fontWeight: font.light,
    },

    h3: {
      fontSize: font.xxLarge,
      fontWeight: font.semiBold,
    },

    h4: {
      fontSize: font.xxLarge,
      fontWeight: font.light,
    },

    // variant used frequentily
    h5: {
      fontSize: font.xLarge,
      fontWeight: font.light,
    },

    h6: {
      fontSize: font.large,
      fontWeight: font.bold,
    },

    subtitle1: {
      fontSize: font.medium,
      fontWeight: font.bold,
      lineHeight: 1.3,
    },

    subtitle2: {
      fontSize: font.regular,
      fontWeight: font.bold,
    },

    body2: {
      fontSize: font.regular,
    },

    body1: {
      fontSize: font.small,
    },

    caption: {
      fontSize: font.small,
      lineHeight: 1.3,
    },
  },

  // ratios
  ratio: {
    // layout volume
    size: {
      // Header
      header: '56px',
      headerLargeScreen: '64px',

      // Sidebar
      sidebar: '240px',
      sidebarLargeScreen: '310px',
    },
  },
})

export default responsiveFontSizes(theme)
