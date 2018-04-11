import { reducer as bees } from 'redux-bees'

import CurrencyDetailReducer from '../scenes/CurrencyDetail/reducer'
import CurrencyListReducer from '../scenes/CurrencyList/reducer'
import FavouriteReducer from '../scenes/Favourite/reducer'

export const scenesReducers = {
  currencyDetail: CurrencyDetailReducer,
  currencyList: CurrencyListReducer,
  favourite: FavouriteReducer
}

export default {
  bees,
  scenes: {
    ...scenesReducers
  }
}
