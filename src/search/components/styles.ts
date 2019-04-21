import {Theme} from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing.unit * 10,
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 3,
  },
  input: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: 0,
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.unit * 3,
  },
}))
