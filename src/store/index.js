import { createStore, applyMiddleware } from 'redux'
import { middleware as beesMiddleware } from 'redux-bees'
import { createLogger } from 'redux-logger'

import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(createLogger(), beesMiddleware()))

export default store
