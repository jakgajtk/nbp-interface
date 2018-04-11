import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import navigation from '../../navigation'

class NavigationMenu extends Component {
  getNavigationItem = item => {
    const path = `/${item.name}`
    return (
      <Link to={path} key={item.name}>
      <MenuItem
        onClick={this.props.handleClose}
        primaryText={item.name}>
      </MenuItem>
      </Link>
      )
  }

  render() {
    const navigationItems = navigation.map(value => this.getNavigationItem(value))
    return (
      <div>{navigationItems}</div>
    )
  }
}

NavigationMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default NavigationMenu