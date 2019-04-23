import React, {useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import theme from '../../theme'
import AppBar from '../../navigation/components'
import Providers from '../../providers'
import Permission from '../../permission/components'

export default function() {
  const [loading, setLoading] = useState(false)

  function start() {
    setLoading(true)
  }

  function stop() {
    setLoading(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar loading={loading} />
      <Providers />
      <Permission />
    </ThemeProvider>
  )
}
