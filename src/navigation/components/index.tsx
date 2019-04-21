import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import {useStyles} from './styles'

type Props = {
  loading: boolean
}

export default function({loading}: Props) {
  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.title} variant="h6" color="inherit">
          Stack Overflood
        </Typography>

        <Button color="inherit" href="#">
          GitHub
        </Button>
      </Toolbar>
      {loading && <LinearProgress />}
    </AppBar>
  )
}
