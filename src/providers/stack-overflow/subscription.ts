import getOr from 'lodash/fp/getOr'

import {notify} from '../../notification'
import {ProviderFormData} from '..'

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

const SITE_URL = 'https://stackoverflow.com'

export function subscribe(data: ProviderFormData) {
  const tags: string[] = getOr('', 'tags', data).split(' ')
  tags.forEach(tag => subscribeTo(tag.trim()))
}

function subscribeTo(tag: string) {
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
      console.info(`Stack Overflow: subscribe to ${tag}`)
      state.socket.send(`1-questions-newest-tag-${tag}`)
    }
  }

  function handleClose() {
    console.info('Stack Overflow: close')
  }

  function handleError(this: WebSocket, event: Event): any {
    console.error('Stack Overflow: error')
    console.error(event)
  }

  function handleMessage(rawEvent: any) {
    if (!state.socket) return
    console.debug('Stack Overflow: message', rawEvent)

    try {
      const event = JSON.parse(rawEvent.data)

      switch (event.action) {
        case 'hb':
          console.info('Stack Overflow: heart bit')
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
          return notify(
            `[${tag}] ${link.innerHTML}`,
            `${SITE_URL}/${link.getAttribute('href')}`,
          )

        default:
          return
      }
    } catch (error) {
      console.error('Stack Overflow: error parsing event')
      console.error(error)
    }
  }
}

export function unsubscribe() {
  if (state.socket) {
    state.socket.close()
    state.socket = null
  }

  state.subscriptions = []
  state.questionIds = []
}
