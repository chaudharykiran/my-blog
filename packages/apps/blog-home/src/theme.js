import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// theme object
const theme = createMuiTheme({
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

  // palette: {
  //   primary: {
  //     light: '#13ec8e',
  //     main: '#0fb56e',
  //     dark: '#0a7647',
  //   },

  //   secondary: {
  //     light: '#f7ada1',
  //     main: '#ee563e',
  //     dark: '#d32c12',
  //     contrastText: '#fff',
  //   },

  //   text: {
  //     secondary: '#999999',
  //     primary: '#1a1a1a',
  //     disabled: '#999999',
  //     hint: '#737373',
  //   },

  //   background: {
  //     default: '#ffffff',
  //   },
  // },
})

export default responsiveFontSizes(theme)
