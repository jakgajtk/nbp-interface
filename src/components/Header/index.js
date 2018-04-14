import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import NavigationMenu from '../NavigationMenu'

const HEADER_NAME = 'NBP User Interface'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render () {
    return (
      <div>
        <AppBar
          title={HEADER_NAME}
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <NavigationMenu handleClose={this.handleClose} />
        </Drawer>
      </div>
    )
  }
}

export default Header
