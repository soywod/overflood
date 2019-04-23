import {Theme} from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing.unit * 12,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 8,
    },
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 1,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
      marginBottom: theme.spacing.unit * 2,
    },
  },
  logo: {
    width: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  text: {
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing.unit * 2,
    },
  },
  input: {
    marginTop: 0,
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing.unit * 2,
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))
