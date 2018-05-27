import { StackNavigator } from 'react-navigation'
import Login from '../screens/Login'
import CreditCard from '../screens/CreditCard'

const RootNaviator = StackNavigator({
  CreditCard: {
    screen: CreditCard
  },
  Login: {
    screen: Login,
  },
}, {
  headerMode: 'none'
})

export default RootNaviator