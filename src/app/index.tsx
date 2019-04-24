import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import theme from '../theme'
import AsyncProvider from '../async/provider'
import AppBar from '../navigation'
import Providers from '../providers'
import Permission from '../permission/components'

export default function() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AsyncProvider>
        <AppBar />
        <Providers />
        <Permission />
      </AsyncProvider>
    </ThemeProvider>
  )
}
