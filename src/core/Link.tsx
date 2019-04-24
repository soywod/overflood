import React, {ReactNode} from 'react'
import Link from '@material-ui/core/Link'
import _ from 'lodash/fp'

type Props = {
  to: string
  children: ReactNode
}

export default function({to, children}: Props) {
  return (
    <Link href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}
