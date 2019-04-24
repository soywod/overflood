import React, {ReactNode, useState} from 'react'

import {AsyncContext} from './context'

type Props = {
  children: ReactNode
}

export default function({children}: Props) {
  const [loading, setLoading] = useState<boolean | null>(null)

  function start() {
    setLoading(true)
  }

  function stop() {
    setLoading(false)
  }

  return (
    <AsyncContext.Provider value={{loading, start, stop}}>
      {children}
    </AsyncContext.Provider>
  )
}
