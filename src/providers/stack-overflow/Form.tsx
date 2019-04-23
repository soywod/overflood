import React, {Fragment, useRef} from 'react'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'

import storage from '../../storage/utils'
import logo from './logo.png'

import {ProviderProps} from '..'

import {useStyles} from './styles'

export default function(props: ProviderProps) {
  const classes = useStyles()
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <Fragment>
      <TextField
        className={classes.input}
        name="tags"
        inputProps={{ref: inputRef}}
        variant="outlined"
        margin="dense"
        label="Tags (space separated)"
        fullWidth
        autoFocus
        defaultValue={storage.loadTags()}
        required
      />
    </Fragment>
  )
}
