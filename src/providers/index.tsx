import React, {ComponentType, Fragment, FormEvent} from 'react'
import {useRef, useState} from 'react'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import reject from 'lodash/fp/reject'
import pipe from 'lodash/fp/pipe'
import toArray from 'lodash/fp/toArray'
import fromPairs from 'lodash/fp/fromPairs'
import invoke from 'lodash/fp/invoke'
import invokeMap from 'lodash/fp/invokeMap'
import some from 'lodash/fp/some'

import {notify} from '../notification'
import stackOverflow from './stack-overflow'
import codeur from './codeur'

import {useStyles} from './styles'

export type ProviderProps = {}
export type Provider = {
  name: string
  description: string
  form: ComponentType<ProviderProps>
  subscribe: (data: {[key: string]: string}) => void
  unsubscribe: () => void
}

export type ProviderFormProps = {}

type SubmitElement = HTMLInputElement | null
type SubmitsMap = {[key: string]: SubmitElement}
type Props = {}

const providers = [stackOverflow, codeur]

export default function(props: Props) {
  const [providersEnabled, enableProviders] = useState<Provider[]>([])
  const [loading, setLoading] = useState(false)
  const submitsRef = useRef<SubmitsMap>({})
  const classes = useStyles()

  function isProviderEnabled({name}: Provider) {
    return some({name}, providersEnabled)
  }

  function enableProvider(provider: Provider) {
    return () => enableProviders([...providersEnabled, provider])
  }

  function disableProvider({name}: Provider) {
    return () => enableProviders(reject({name}, providersEnabled))
  }

  function submit(provider: Provider) {
    return (event: FormEvent) => {
      event.preventDefault()

      const formData = new FormData(event.currentTarget as HTMLFormElement)
      const data = pipe([toArray, fromPairs])(formData)
      provider.subscribe(data)
    }
  }

  function start() {
    providersEnabled.map(({name}) => invoke('click', submitsRef.current[name]))
    setLoading(true)
    notify(`Subscriptions ON (${providersEnabled.length})`)
  }

  function stop() {
    invokeMap('unsubscribe', providersEnabled)
    setLoading(false)
    notify(`Subscriptions OFF (${providersEnabled.length})`)
  }

  return (
    <Fragment>
      <Grid className={classes.container} container spacing={16}>
        {providers.map(provider => (
          <Grid key={provider.name} item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
              <Typography className={classes.title} component="h2" variant="h4">
                {provider.name}
              </Typography>

              <Typography className={classes.text} variant="body1">
                {provider.description}
              </Typography>

              {isProviderEnabled(provider) ? (
                <form className={classes.form} onSubmit={submit(provider)}>
                  <input
                    className={classes.submit}
                    ref={ref => (submitsRef.current[provider.name] = ref)}
                    type="submit"
                  />

                  <provider.form />

                  <div className={classes.button}>
                    <Button
                      variant="outlined"
                      color="default"
                      onClick={disableProvider(provider)}
                    >
                      Disable
                    </Button>
                  </div>
                </form>
              ) : (
                <div className={classes.button}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={enableProvider(provider)}
                  >
                    Enable
                  </Button>
                </div>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
      {loading ? (
        <Fab
          className={classes.startStop}
          variant="extended"
          color="default"
          onClick={stop}
        >
          Stop
        </Fab>
      ) : (
        <Fab
          className={classes.startStop}
          variant="extended"
          color="secondary"
          onClick={start}
        >
          Start
        </Fab>
      )}
    </Fragment>
  )
}
