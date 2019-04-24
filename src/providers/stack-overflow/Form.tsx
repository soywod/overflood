import React from 'react'

import {ProviderProps} from '..'

export default function(props: ProviderProps) {
  const {TextField} = props.components

  return (
    <TextField
      name="tags"
      label="Tags"
      helperText="Tags must be separated by spaces."
    />
  )
}
