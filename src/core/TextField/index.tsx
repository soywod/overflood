import React from 'react'
import classNames from 'classnames'
import TextField, {OutlinedTextFieldProps} from '@material-ui/core/TextField'
import _ from 'lodash/fp'

import {useStyles} from './styles'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type TextFieldProps = Omit<OutlinedTextFieldProps, 'variant'>

export default function(props: TextFieldProps) {
  const classes = useStyles()

  return (
    <TextField
      margin="dense"
      variant="outlined"
      fullWidth
      required
      {..._.omit('className', props)}
      className={classNames(classes.input, props.className)}
    />
  )
}
