import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import ReactDOM from 'react-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
      </Router>
    )
  }
}

module.hot.accept()

export default App
