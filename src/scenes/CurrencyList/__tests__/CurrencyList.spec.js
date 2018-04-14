import React from 'react'
import CurrencyList from '../../CurrencyList'
import renderer from 'react-test-renderer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import store from '../../../store'

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><MuiThemeProvider><CurrencyList /></MuiThemeProvider></Provider>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})