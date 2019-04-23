import {Provider} from '..'
import Form from './Form'

const provider: Provider = {
  name: 'Codeur.com',
  description: 'Get notified when a new project is uploaded.',
  form: Form,
  subscribe: () => {
    console.log('subscribe')
  },
  unsubscribe: () => {
    console.log('unsubscribe')
  },
}

export default provider
