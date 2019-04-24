import {Theme} from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) => ({
  input: {
    margin: 0,
    '&:not(:last-of-type)': {
      marginBottom: theme.spacing.unit * 4,
    },
  },
}))
