import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

class CurrencyListItem extends Component {
  render () {
    const { item, table } = this.props
    const path = `currency-detail/${table}/${item.code}`
    const currencyValue = item.mid || item.rates[0].mid
    return (
      <Link to={path} style={{ textDecoration: 'none' }} key={item.code}>
        <ListItem
          primaryText={item.currency}
          secondaryText={currencyValue}
        />
      </Link>
    )
  }
}

export default CurrencyListItem
