import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../../services/Api'

class CurrencyList extends Component {
  componentDidMount() {
    this.props.dispatch(api.getPrimaryCurrencyList)
      .then(data => {
        console.log(data)
      })
  }

  render () {
    return (
      <div>currency list view</div>
    )
  }
}


export default connect()(CurrencyList)
