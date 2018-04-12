import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../../services/Api'
import { refresh } from './actions'
import { List, ListItem } from 'material-ui/List'
import getCurrencyList from './selectors'
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

const PRIMARY_TABLE = 'A'
const SECONDARY_TABLE = 'B'
const style = {
  float: 'right',
  'lineHeight': '30px'
}

class CurrencyList extends Component {
  constructor(props) {
    super(props);
    this.state = {table: PRIMARY_TABLE}
  }

  componentDidMount() {
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

  getListItem = item => {
    const path = `currency-detail/${this.state.table}/${item.code}`
    return (
      <Link to={path} style={{ textDecoration: 'none' }} key={item.code}>
        <ListItem
          primaryText={item.currency}
          secondaryText={item.mid}
        />
      </Link>
    )
  }

  render () {
    const result = this.props.currencyList.map(item => this.getListItem(item))
    return (
      <div>
        <List>
          <Subheader>Currency Rates List
            <span style={style}>
              <RaisedButton label="Primary Currency Rates" primary={true} onClick={this.getPrimaryList} />
              <RaisedButton label="Secondary Currency Rates" secondary={true} onClick={this.getSecondaryList}/>
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
