import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const initialState = {}

const byId = createReducer(initialState, {
  [actions.ADD_COMMENT](state, action) {
    const { id } = action.comment
    return {
      ...state,
      [id]: {
        ...action.comment,
      },
    }
  },
})

export default combineReducers({
  byId,
})
