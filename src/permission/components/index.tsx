import React from 'react'

import {usePermission} from '../hooks'
import PermissionDefault from './Default'
import PermissionDenied from './Denied'

export default function() {
  const [permission, requestPermission] = usePermission()

  switch (permission) {
    case 'default':
      return <PermissionDefault requestPermission={requestPermission} />

    case 'denied':
      return <PermissionDenied />

    case 'granted':
    default:
      return null
  }
}
