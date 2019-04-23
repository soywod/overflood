import {Theme} from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/styles/makeStyles'
import color from '@material-ui/core/colors/amber'

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flex: 1,
    cursor: 'pointer',
  },
  switchBase: {
    color: theme.palette.grey[300],
    '&$checked': {
      color: color[400],
      '& + $bar': {
        backgroundColor: color[400],
      },
    },
  },
  checked: {},
  bar: {},
}))
