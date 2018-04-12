import { reducer as bees } from 'redux-bees'
import { combineReducers } from 'redux'

import CurrencyDetailReducer from '../scenes/CurrencyDetail/reducer'
import CurrencyListReducer from '../scenes/CurrencyList/reducer'

export default combineReducers({
  bees,
  currencyDetail: CurrencyDetailReducer,
  currencyList: CurrencyListReducer
})
