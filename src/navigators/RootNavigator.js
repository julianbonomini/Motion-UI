import { StackNavigator } from 'react-navigation'
import Login from '../screens/Login'
import CreditCard from '../screens/CreditCard'

const RootNaviator = StackNavigator({
  Login: {
    screen: Login,
  },
  CreditCard: {
    screen: CreditCard
  }
}, {
  headerMode: 'none'
})

export default RootNaviator