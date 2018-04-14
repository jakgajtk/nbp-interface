import React from 'react'
import CurrencyDetail from '../../CurrencyDetail'
import renderer from 'react-test-renderer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import store from '../../../store'

it('renders correctly', () => {
  const routeParams = {
    params: {
      currency: 'USD',
      table: 'A'
    }
  }

  const tree = renderer
    .create(<Provider store={store}><MuiThemeProvider><CurrencyDetail match={routeParams}/></MuiThemeProvider></Provider>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})