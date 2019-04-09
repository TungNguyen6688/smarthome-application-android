import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './login'
import HomeTab from './tab'

const stackLoginAndHome = createStackNavigator(
    {
        Login: LoginScreen,
        TabHome: HomeTab
    },
    {
        initialRouteName: 'Login',
        mode :'modal',
        headerMode: 'none'
    },
)
export default createAppContainer(stackLoginAndHome)