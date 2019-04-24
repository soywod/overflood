import {Provider} from '..'
import Form from './Form'
import {subscribe, unsubscribe} from './subscription'

const provider: Provider = {
  name: 'Stack Overflow',
  description: 'Get notified when a new question is posted.',
  link: 'https://stackoverflow.com',
  form: Form,
  subscribe,
  unsubscribe,
}

export default provider
