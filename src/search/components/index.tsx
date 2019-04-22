import React, {FormEvent, ChangeEvent, useRef, useState} from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
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
