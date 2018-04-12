import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const initialState = {}

const reducer = createReducer(initialState, {
  [actions.ADD](state, action) {
    return {
      ...state,
      currency: action.data
    }
  }
})

export default reducer
