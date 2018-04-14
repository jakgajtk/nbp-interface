import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const initialState = {
  list: []
}

const currencyReducer = createReducer(initialState, {
  [actions.REFRESH_LIST] (state, action) {
    return {
      ...state,
      list: action.data
    }
  }
})

export default currencyReducer
