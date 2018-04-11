import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    )
  }
}

module.hot.accept()

export default App
