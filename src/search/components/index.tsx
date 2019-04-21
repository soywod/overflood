import React, {FormEvent, ChangeEvent, useRef, useState} from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import {useStyles} from './styles'

type Props = {
  loading: boolean
  start: () => void
  stop: () => void
}

export default function({loading, start, stop}: Props) {
  const classes = useStyles()
  const [tags, setLocalTags] = useState<string | null>(null)
  const searchRef = useRef<HTMLInputElement | null>(null)

  function setTags(event: ChangeEvent<HTMLInputElement>) {
    setLocalTags(event.currentTarget.value || null)
  }

  function toggleSearch(event: FormEvent) {
    event.preventDefault()

    if (loading) {
      stop()
    } else {
      start()
    }
  }

  return (
    <Grid className={classes.container} container justify="center">
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <form onSubmit={toggleSearch}>
            <Typography component="h1" variant="h3">
              Stack Overflood
            </Typography>

            <Typography gutterBottom variant="body1">
              Stack Overflood is a tool that helps you to increase your Stack
              Overflow's reputation. You subscribe to your favorite tags, and
              you get notified when a new question is posted.
            </Typography>

            <TextField
              className={classes.input}
              inputProps={{ref: searchRef}}
              variant="outlined"
              margin="dense"
              label="Tags (space separated)"
              fullWidth
              autoFocus
              value={tags || ''}
              onChange={setTags}
              disabled={loading}
            />

            <div className={classes.button}>
              <Button
                type="submit"
                variant="contained"
                color={loading ? 'default' : 'secondary'}
                disabled={!tags}
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
