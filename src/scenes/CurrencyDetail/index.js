import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../../services/Api'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { add } from './actions'
import { addFavourite, removeFavourite } from '../Favourite/actions'
import getCurrencyDetail from './selectors'
import getFavouriteList from '../Favourite/selectors'
import _ from 'lodash'
import PropTypes from 'prop-types'

class CurrencyDetail extends Component {
  componentDidMount () {
    const {
      dispatch,
      match: {params: {currency, table}}
    } = this.props
    const apiParams = {currency, table}
    dispatch(api.getCurrencyListDetails(apiParams))
      .then(data => {
        dispatch(add(data.body))
      })
      .catch(error => {
        console.log(error)
      })
  }

  onAddFavouriteButtonClick = () => {
    const {currency, dispatch} = this.props
    dispatch(addFavourite(currency))
  }

  onRemoveFavouriteButtonClick = () => {
    const {currency, dispatch} = this.props
    dispatch(removeFavourite(currency))
  }

  render () {
    const {currency: detail, favourite: {list: favouriteList}} = this.props
    let result
    if (detail) {
      const isFavourite = _.find(favouriteList, item => item.code === detail.code)
      const favouriteResult = isFavourite ? (<div>
        <p>
          Already in your favourite list.
        </p>
        <FlatButton
          label='Remove from favourite'
          onClick={this.onRemoveFavouriteButtonClick}
          primary
        />
      </div>) : (<FlatButton
        label='Add to favourite'
        onClick={this.onAddFavouriteButtonClick}
        primary
      />)

      result = (<div>
          <CardHeader
            title={detail.currency}
            subtitle={detail.code}
          />
          <CardText>
            <p>
              Effective date: {detail.rates[0].effectiveDate}
            </p>
            <p>
              Number: {detail.rates[0].no}
            </p>
            <p>
              Rate: {detail.rates[0].mid}
            </p>
          </CardText>
          <CardActions>
            {favouriteResult}
          </CardActions></div>
      )
    }
    return (
      <Card>
        {result}
      </Card>
    )
  }
}

// From react router Link
CurrencyDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      table: PropTypes.string.isRequired
    })
  })
}

export default connect(state => ({
  currency: getCurrencyDetail(state),
  favourite: getFavouriteList(state)
}))(CurrencyDetail)
