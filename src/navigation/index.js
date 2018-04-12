import Favourite from '../scenes/Favourite'
import CurrencyDetail from '../scenes/CurrencyDetail'
import CurrencyList from '../scenes/CurrencyList'
import About from '../scenes/About'

const navigation = [{
  name: 'About',
  path: '',
  component: About
}, {
  name: 'Currency Details',
  path: 'currency-detail/:table/:currency',
  component: CurrencyDetail,
  hidden: true
}, {
  name: 'Currency List',
  path: 'currency-list',
  component: CurrencyList
}, {
  name: 'Favourite',
  path: 'favourite',
  component: Favourite
}]

export default navigation