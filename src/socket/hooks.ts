import {notify} from '../notification/utils'

type Subscribe = (tag: string) => void
type Unsubscribe = () => void

type State = {
  socket: WebSocket | null
  subscriptions: string[]
  questionIds: number[]
}

const state: State = {
  socket: null,
  subscriptions: [],
  questionIds: [],
}

export function useSocket(): [Subscribe, Unsubscribe] {
  function subscribe(tag: string) {
    state.subscriptions.push(tag)

    if (!state.socket) {
      state.socket = new WebSocket('wss://qa.sockets.stackexchange.com')

      state.socket.onopen = () => state.subscriptions.forEach(subscribeTo)
      state.socket.close = handleClose
      state.socket.onerror = handleError
      state.socket.onmessage = handleMessage
    }

    function subscribeTo(tag: string) {
      if (state.socket) {
        console.info(`Socket: subscribe to ${tag}`)
        state.socket.send(`1-questions-newest-tag-${tag}`)
      }
    }

    function handleClose() {
      console.info('Socket: close')
      notify('Subscription OFF')
    }

    function handleError(this: WebSocket, event: Event): any {
      console.error('Socket: error')
      console.error(event)
      notify('Subscription OFF')
    }

    function handleMessage(rawEvent: any) {
      if (!state.socket) return
      console.debug('Socket: message', rawEvent)

      try {
        const event = JSON.parse(rawEvent.data)

        switch (event.action) {
          case 'hb':
            console.info('Socket: heart bit')
            return state.socket.send('pong')

          case `1-questions-newest-tag-${tag}`:
            const data = JSON.parse(event.data)

            if (state.questionIds.includes(data.id)) {
              return
            }

            state.questionIds.push(data.id)

            const $html = document.createElement('html')
            $html.innerHTML = data.body

            const link = $html.getElementsByClassName('question-hyperlink')[0]
            notify(`[${tag}] ${link.innerHTML}`, link.getAttribute('href'))
            break

          default:
            return
        }
      } catch (error) {
        console.error('Socket: error parsing event')
        console.error(error)
      }
    }
  }

  function unsubscribe() {
    if (state.socket) {
      state.socket.close()
      state.socket = null
    }

    state.subscriptions = []
    state.questionIds = []
  }

  return [subscribe, unsubscribe]
}
