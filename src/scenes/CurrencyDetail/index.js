import React, { Component } from 'react'
import { connect } from 'react-redux'

class CurrencyDetail extends Component {
  render () {
    return (
      <div>detail view</div>
    )
  }
}


export default connect()(CurrencyDetail)
