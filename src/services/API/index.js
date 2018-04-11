import {
  buildApi,
  get,
} from 'redux-bees'

const apiUrl = 'http://api.nbp.pl/api/exchangerates/'

const config = {
  baseUrl: apiUrl,
  configureHeaders (headers) {
    return {
      ...headers,
      Accept: 'application/json'
    }
  }
}

const PRIMARY_TABLE_CODE = 'A'
const SECONDARY_TABLE_CODE = 'B'

const apiEndpoints = {
  getPrimaryCurrencyList: {method: get, path: `tables/${PRIMARY_TABLE_CODE}/`},
  getSecondaryCurrencyList: {method: get, path: `tables/${SECONDARY_TABLE_CODE}/`},
  getCurrencyListDetails: {method: get, path: 'rates/:table/:code'}
}

export default {
  ...buildApi(apiEndpoints, config),
}