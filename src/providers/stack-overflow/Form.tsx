import React, {Fragment} from 'react'
import TextField from '@material-ui/core/TextField'

import {useStyles} from './styles'

export default function() {
  const classes = useStyles()

  return (
    <Fragment>
      <TextField
        className={classes.input}
        name="tags"
        variant="outlined"
        margin="dense"
        label="Tags (space separated)"
        fullWidth
        required
      />
    </Fragment>
  )
}
