import {Theme} from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 7,
    },
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  form: {
    marginTop: theme.spacing.unit * 4,
  },
  text: {
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  startStop: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  submit: {
    display: 'none',
  },
}))
