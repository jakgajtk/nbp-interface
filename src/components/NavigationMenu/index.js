import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import {
  Route
} from 'react-router-dom'
import PropTypes from 'prop-types'
import About from '../../scenes/About'
import CurrencyDetail from '../../scenes/CurrencyDetail'
import CurrencyList from '../../scenes/CurrencyList'
import Favourite from '../../scenes/Favourite'


const navigationArray = [{
  name: 'About',
  component: About
}, {
  name: 'CurrencyDetail',
  component: CurrencyDetail
}, {
  name: 'CurrencyList',
  component: CurrencyList
}, {
  name: 'Favourite',
  component: Favourite
}]

class NavigationMenu extends Component {
  onNavigationClick = val => {
    console.log(val)
  }

  getNavigationItem = item => {
    const path = `/${item.name}`
    return (
      <MenuItem
        key={item.name}
        onClick={this.props.handleClose}
        primaryText={item.name}>
        <Route path={path} component={item.component} />
      </MenuItem>
      )
  }

  render() {
    const navigationItems = navigationArray.map(value => this.getNavigationItem(value))
    console.log(navigationItems)
    return (
      <div>
        {navigationItems}
      </div>
    )
  }
}


NavigationMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default NavigationMenu