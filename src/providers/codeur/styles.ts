import {Theme} from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) => ({
  input: {
    margin: 0,
    marginTop: theme.spacing.unit * 2,
  },
}))
