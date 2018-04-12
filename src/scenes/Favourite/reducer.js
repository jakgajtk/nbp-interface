import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'
import _ from 'lodash'

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
    const favourites = _.omit(state, [code])
    return {
      ...favourites
    }
  }
})

export default reducer
