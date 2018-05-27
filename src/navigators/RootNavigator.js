import { StackNavigator } from 'react-navigation'
import Login from '../screens/Login'

const RootNaviator = StackNavigator({
  Login: {
    screen: Login,
  }
}, {
  headerMode: 'none'
})

export default RootNaviator