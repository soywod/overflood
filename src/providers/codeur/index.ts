import {Provider} from '..'
import Form from './Form'
import {subscribe, unsubscribe} from './subscription'

const provider: Provider = {
  name: 'Codeur.com',
  description: 'Get notified when a new project is uploaded.',
  link: 'https://www.codeur.com',
  form: Form,
  subscribe,
  unsubscribe,
}

export default provider
