import React, {Fragment} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'

import useAsyncContext from '../async/context'
import {useStyles} from './styles'

export default function() {
  const async = useAsyncContext()
  const classes = useStyles()

  function handleChange(_e: any, checked: boolean) {
    if (checked) async.start()
    else async.stop()
  }

  return (
    <Fragment>
      {async.loading && (
        <div className={classes.loader}>
          <CircularProgress color="secondary" size={64} thickness={3} />
        </div>
      )}
      <AppBar position="relative">
        <Toolbar>
          <Typography
            className={classes.title}
            component="label"
            variant="h6"
            color="inherit"
          >
            Overflood
            <Switch onChange={handleChange} />
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
      </AppBar>
    </Fragment>
  )
}
