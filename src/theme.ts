import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createPalette from '@material-ui/core/styles/createPalette'
import secondary from '@material-ui/core/colors/amber'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: createPalette({
    secondary: {
      main: secondary[600],
    },
  }),
})

export default theme
