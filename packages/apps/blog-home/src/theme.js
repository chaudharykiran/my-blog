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
})

export default responsiveFontSizes(theme)
