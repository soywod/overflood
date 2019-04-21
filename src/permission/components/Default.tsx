import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

type Props = {
  requestPermission: () => void
}

export default function({requestPermission}: Props) {
  return (
    <Dialog open={true}>
      <DialogTitle>Permission required</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Stack Overflood requires notifications permission on.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" autoFocus onClick={requestPermission}>
          Ask for permission
        </Button>
      </DialogActions>
    </Dialog>
  )
}
