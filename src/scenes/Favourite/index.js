import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import CurrencyListItem from '../../components/CurrencyListItem'
import getFavouriteList from './selectors'

class Favourite extends Component {
  render () {
    const { favourite } = this.props
    const hasFavourites = favourite !== {}
    let result
    if (hasFavourites) {
      result = favourite.list.map(item => <CurrencyListItem item={item} table={item.table} key={item.code} />)
    }
    return (
      <div>
        <List>
          <Subheader>Favourite Currencies list</Subheader>
          {result}
        </List>
      </div>
    )
  }
}

export default connect(state => ({
  favourite: getFavouriteList(state)
}))(Favourite)
