import React, {Fragment, useRef} from 'react'
import TextField from '@material-ui/core/TextField'

import {ProviderProps} from '..'

import {useStyles} from './styles'

export default function(props: ProviderProps) {
  const classes = useStyles()
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <Fragment>
      <TextField
        className={classes.input}
        multiline
        name="links"
        inputProps={{ref: inputRef}}
        variant="outlined"
        margin="dense"
        label="Links (space separated)"
        fullWidth
        autoFocus
        required
      />
    </Fragment>
  )
}
