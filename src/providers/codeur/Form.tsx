import React, {Fragment} from 'react'

import {ProviderProps} from '..'

export default function(props: ProviderProps) {
  const {TextField} = props.components

  return (
    <Fragment>
      <TextField
        name="category"
        label="Category"
        defaultValue="developpement"
        helperText={
          <Fragment>
            Value appearing after <code>/projects/c/</code>
          </Fragment>
        }
      />
      <TextField
        name="subcategory"
        label="Subcategory"
        defaultValue="developpeur-front-end"
        helperText={
          <Fragment>
            Value appearing after <code>/projects/c/&lt;category&gt;/sc/</code>
          </Fragment>
        }
      />
    </Fragment>
  )
}
