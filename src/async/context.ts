import {createContext, useContext} from 'react'
import noop from 'lodash/fp/noop'

type Context = {
  loading: boolean | null
  start: () => void
  stop: () => void
}

const defaultContext: Context = {
  loading: null,
  start: noop,
  stop: noop,
}

export const AsyncContext = createContext<Context>(defaultContext)

export default function() {
  return useContext(AsyncContext)
}
