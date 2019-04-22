const BASE_URL = 'https://stackoverflow.com'

export function notify(body: string, link?: string | null) {
  const notification = new Notification('Stack Overflood', {body})

  if (link) {
    notification.onclick = () => {
      window.open(BASE_URL + link, '_blank')
      notification.close()
    }
  }
}
