import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'

import {useStyles} from './styles'

type Props = {
  loading: boolean
}

export default function({loading}: Props) {
  const classes = useStyles()
  const {switchBase, checked, bar} = classes

  return (
    <AppBar>
      <Toolbar>
        <Typography
          className={classes.title}
          component="label"
          variant="h6"
          color="inherit"
        >
          Overflood
          <Switch classes={{switchBase, checked, bar}} />
        </Typography>

        <Button
          color="inherit"
          href="https://github.com/soywod/overflood"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </Toolbar>
      {loading && <LinearProgress />}
    </AppBar>
  )
}
