export function notify(body: string, link?: string | null) {
  const notification = new Notification('Overflood', {body})

  if (link) {
    notification.onclick = () => {
      window.open(link, '_blank')
      notification.close()
    }
  }
}
