import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const initialState = {}

const reducer = createReducer(initialState, {
  [actions.ADD_FAVOURITE](state, action) {
    const { code } = action.data
    return {
      ...state,
      [code]: {
        ...action.data
      }
    }
  },
  [actions.REMOVE_FAVOURITE](state, action) {
    const { code } = action.data
    delete state[code]
    const favourites = {}
    return {
      ...state,
      favourites
    }
  }
})

export default reducer
