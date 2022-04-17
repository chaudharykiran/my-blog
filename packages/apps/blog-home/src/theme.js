import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const defaultTheme = createTheme()

// theme object
const theme = createTheme({
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

  palette: {
    background: {
      default: '#ffffff',
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        color: defaultTheme.palette.text.primary,
        underline: 'none',
      },
      styleOverrides: {
        underlineHover: defaultTheme.palette.text.secondary,
      },
    },
  },
})

export default responsiveFontSizes(theme)
