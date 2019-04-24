import React, {Fragment} from 'react'
import TextField from '@material-ui/core/TextField'

import {useStyles} from './styles'

export default function() {
  const classes = useStyles()

  return (
    <Fragment>
      <TextField
        className={classes.input}
        name="category"
        variant="outlined"
        margin="dense"
        label="Category"
        fullWidth
        required
        defaultValue="developpement"
      />
      <TextField
        className={classes.input}
        name="subcategory"
        variant="outlined"
        margin="dense"
        label="Subcategory"
        fullWidth
        required
        defaultValue="developpeur-front-end"
      />
    </Fragment>
  )
}
