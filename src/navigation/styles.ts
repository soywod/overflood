import {Theme} from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) => ({
  loader: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    zIndex: 1099,
    background: 'rgba(255, 255, 255, .8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    cursor: 'pointer',
  },
}))
