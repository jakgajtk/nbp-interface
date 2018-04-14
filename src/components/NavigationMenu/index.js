import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import navigation from '../../navigation'

class NavigationMenu extends Component {
  getNavigationItem = item => {
    if (item.hidden) {
      return
    }
    const path = `/${item.path}`
    return (
      <Link to={path} style={{ textDecoration: 'none' }} key={item.name}>
        <MenuItem
          onClick={this.props.handleClose}
          primaryText={item.name} />
      </Link>
    )
  }

  render () {
    const navigationItems = navigation.map(value => this.getNavigationItem(value))
    return (
      <div>{navigationItems}</div>
    )
  }
}

NavigationMenu.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default NavigationMenu
