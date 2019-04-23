import getOr from 'lodash/fp/getOr'

import {Provider} from '..'
import Form from './Form'
import * as socket from './socket'

const provider: Provider = {
  name: 'Stack Overflow',
  description: 'Get notified when a new question is posted.',
  form: Form,
  subscribe: async data => {
    const tags = getOr('', 'tags', data).split(' ')
    tags.forEach(tag => socket.subscribe(tag.trim()))
  },
  unsubscribe: () => {
    socket.unsubscribe()
  },
}

export default provider
