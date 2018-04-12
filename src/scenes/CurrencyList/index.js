import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../../services/Api'
import { refresh } from './actions'
import { List, ListItem } from 'material-ui/List'
import getCurrencyList from './selectors'
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  float: 'right',
  'line-height': '30px'
}
class CurrencyList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(api.getPrimaryCurrencyList())
      .then(data => {
        dispatch(refresh(data.body[0].rates))
      })
      .catch(error => {
        console.log(error)
      })
  }

  getListItem = item => {
    return <ListItem
        key={item.code}
        primaryText={item.currency}
        secondaryText={item.mid}
      />
  }

  render () {
    const result = this.props.currencyList.map(item => this.getListItem(item))
    return (
      <div>
        <List>
          <Subheader>Currency Ratest List
            <span style={style}>
              <RaisedButton label="Primary Currency Rates" primary={true} />
              <RaisedButton label="Secondary Currency Rates" secondary={true} />
            </span>
          </Subheader>
          {result}
        </List>
      </div>
    )
  }
}

export default connect(state => ({
  currencyList: getCurrencyList(state),
}))(CurrencyList)
