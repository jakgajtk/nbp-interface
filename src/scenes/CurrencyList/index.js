import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../../services/Api'
import { refresh } from './actions'
import { List } from 'material-ui/List'
import getCurrencyList from './selectors'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'
import CurrencyListItem from '../../components/CurrencyListItem'

const PRIMARY_TABLE = 'A'
const SECONDARY_TABLE = 'B'
const style = {
  float: 'right',
  'lineHeight': '30px'
}

class CurrencyList extends Component {
  constructor (props) {
    super(props)
    this.state = {table: PRIMARY_TABLE}
  }

  componentDidMount () {
    if (!this.props.currencyList.length) {
      this.getPrimaryList()
    }
  }

  getPrimaryList = () => {
    const { dispatch } = this.props
    dispatch(api.getPrimaryCurrencyList())
      .then(data => {
        this.setState({table: PRIMARY_TABLE})
        dispatch(refresh(data.body[0].rates))
      })
      .catch(error => {
        console.log(error)
      })
  }

  getSecondaryList = () => {
    const { dispatch } = this.props
    dispatch(api.getSecondaryCurrencyList())
      .then(data => {
        this.setState({table: SECONDARY_TABLE})
        dispatch(refresh(data.body[0].rates))
      })
      .catch(error => {
        console.log('Error while fetching data: ', error)
      })
  }

  render () {
    const result = this.props.currencyList.map(item => <CurrencyListItem item={item} table={this.state.table} key={item.code} />)
    return (
      <div>
        <List>
          <Subheader>
            <span>Currency Rates List</span>
            <span style={style}>
              <RaisedButton label='Primary Currency Rates' primary onClick={this.getPrimaryList} />
              <RaisedButton label='Secondary Currency Rates' secondary onClick={this.getSecondaryList} />
            </span>
          </Subheader>
          {result}
        </List>
      </div>
    )
  }
}

export default connect(state => ({
  currencyList: getCurrencyList(state)
}))(CurrencyList)
