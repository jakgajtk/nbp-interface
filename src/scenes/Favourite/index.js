import React, { Component } from 'react'
import { connect } from 'react-redux'

class Favourite extends Component {
  render () {
    return (
      <div>favourite view</div>
    )
  }
}


export default connect()(Favourite)
