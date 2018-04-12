import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import navigation from './navigation'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  getRouteItem = item => {
    if (!item.path) {
      return <Route exact path='/' key={item.name} component={item.component} />
    }
    const path = `/${item.path}`
    return (
      <Route path={path} key={item.name} component={item.component} />
    )
  }

  render () {
    const routes = navigation.map(item => this.getRouteItem(item))
    return (
      <Provider store={store}>
        <Router>
          <Switch>
          <MuiThemeProvider>
            <div>
              <Header />
              {routes}
            </div>
          </MuiThemeProvider>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

module.hot.accept()

export default App
