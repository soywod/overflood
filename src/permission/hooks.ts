import {useEffect, useState} from 'react'

export function usePermission(): [NotificationPermission, () => void] {
  const [permission, setPermission] = useState(Notification.permission)

  useEffect(() => {
    setPermission(Notification.permission)
  }, [Notification.permission])

  async function requestPermission() {
    setPermission(await Notification.requestPermission())
  }

  return [permission, requestPermission]
}
