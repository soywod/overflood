import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function() {
  return (
    <Dialog open={true}>
      <DialogTitle>Permission denied</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Stack Overflood requires notifications permission on. Please enable
          notifications in your browser settings.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
