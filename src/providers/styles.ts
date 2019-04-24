import {Theme} from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 0,
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit,
      paddingTop: 0,
    },
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
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
    marginTop: theme.spacing.unit * 2,
  },
  input: {
    margin: 0,
    marginTop: theme.spacing.unit * 2,
  },
  text: {
    marginBottom: theme.spacing.unit * 2,
  },
  switch: {
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
