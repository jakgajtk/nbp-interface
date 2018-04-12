import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const initialState = {}

const favourite = createReducer(initialState, {
  [actions.ADD_FAVOURITE](state, action) {
    const { id } = action.data
    return {
      ...state,
      [id]: {
        ...action.data,
      },
    }
  },
  [actions.REMOVE_FAVOURITE](state, action) {
    const { id } = action.data
    delete state[id]
    return {
      ...state
    }
  },
})

export default favourite
