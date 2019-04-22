import React, {FormEvent, useRef} from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import storage from '../../storage/utils'
import {notify} from '../../notification/utils'
import {useSocket} from '../../socket/hooks'
import {useStyles} from './styles'

type Props = {
  loading: boolean
  start: () => void
  stop: () => void
}

export default function({loading, start, stop}: Props) {
  const classes = useStyles()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [subscribe, unsubscribe] = useSocket()

  function toggleSearch(event: FormEvent) {
    event.preventDefault()

    if (loading) {
      unsubscribe()
      return stop()
    }

    if (inputRef.current) {
      start()
      const tags = inputRef.current.value.trim()
      tags.split(' ').forEach(tag => subscribe(tag.trim()))
      storage.persistTags(tags)
      notify(`Subscription ON, waiting for new questions...`)
    }
  }

  return (
    <Grid className={classes.container} container justify="center">
      <Grid item xs={12} sm={10} md={6} lg={4}>
        <Paper className={classes.paper}>
          <form onSubmit={toggleSearch}>
            <Typography className={classes.title} component="h1" variant="h3">
              Stack Overflood
            </Typography>

            <Typography className={classes.text} variant="body1">
              Stack Overflood is a tool that helps you to increase your{' '}
              <Link
                href="https://stackoverflow.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stack Overflow
              </Link>
              's reputation. You subscribe to your favorite tags, and you get
              notified when a new question is posted.
            </Typography>

            <TextField
              className={classes.input}
              inputProps={{ref: inputRef}}
              variant="outlined"
              margin="dense"
              label="Tags (space separated)"
              fullWidth
              autoFocus
              disabled={loading}
              defaultValue={storage.loadTags()}
            />

            <div className={classes.button}>
              <Button
                type="submit"
                variant="contained"
                color={loading ? 'default' : 'secondary'}
              >
                {loading ? 'Cancel' : 'Subscribe'}
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}
