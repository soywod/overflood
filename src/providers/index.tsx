import React, {ComponentType, FormEvent} from 'react'
import {useEffect, useRef, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import reject from 'lodash/fp/reject'
import pipe from 'lodash/fp/pipe'
import invoke from 'lodash/fp/invoke'
import invokeMap from 'lodash/fp/invokeMap'
import toArray from 'lodash/fp/toArray'
import fromPairs from 'lodash/fp/fromPairs'
import some from 'lodash/fp/some'

import {notify} from '../notification'
import useAsyncContext from '../async/context'
import stackOverflow from './stack-overflow'
import codeur from './codeur'

import {useStyles} from './styles'

export type SubscribeParams = {[key: string]: string}

export type ProviderProps = {}
export type Provider = {
  name: string
  description: string
  form: ComponentType<ProviderProps>
  subscribe: (data: SubscribeParams) => void
  unsubscribe: () => void
}

type SubmitElement = HTMLInputElement | null
type SubmitsMap = {[key: string]: SubmitElement}

const providers = [stackOverflow, codeur]

export default function() {
  const async = useAsyncContext()
  const [providersEnabled, enableProviders] = useState<Provider[]>([])
  const submitsRef = useRef<SubmitsMap>({})
  const classes = useStyles()

  function toggleProvider(provider: Provider) {
    return (_e: any, checked: boolean) =>
      enableProviders(
        checked
          ? [...providersEnabled, provider]
          : reject({name: provider.name}, providersEnabled),
      )
  }

  function isProviderEnabled({name}: Provider) {
    return some({name}, providersEnabled)
  }

  function submit(provider: Provider) {
    return (event: FormEvent) => {
      event.preventDefault()

      const formData = new FormData(event.currentTarget as HTMLFormElement)
      const data = pipe([toArray, fromPairs])(formData)
      provider.subscribe(data)
    }
  }

  useEffect(() => {
    if (async.loading === true) {
      async.start()
      notify(`Subscriptions ON (${providersEnabled.length})`)
      providersEnabled.map(({name}) =>
        invoke('click', submitsRef.current[name]),
      )
    } else if (async.loading === false) {
      async.stop()
      notify(`Subscriptions OFF (${providersEnabled.length})`)
      invokeMap('unsubscribe', providersEnabled)
    }
  }, [async.loading])

  return (
    <Grid className={classes.container} container spacing={16}>
      {providers.map(provider => (
        <Grid key={provider.name} item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>
            <div className={classes.content}>
              <Typography className={classes.title} component="h2" variant="h4">
                {provider.name}
              </Typography>

              <Typography className={classes.text} variant="body1">
                {provider.description}
              </Typography>

              <form className={classes.form} onSubmit={submit(provider)}>
                <input
                  className={classes.submit}
                  ref={ref => (submitsRef.current[provider.name] = ref)}
                  type="submit"
                />

                <provider.form />
              </form>
            </div>

            <div className={classes.switch}>
              <Switch
                color="secondary"
                checked={isProviderEnabled(provider)}
                onChange={toggleProvider(provider)}
              />
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
