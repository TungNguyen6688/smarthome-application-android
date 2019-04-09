import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './home'
import LightScreen from './light'
import DevicesScreen from './devices'
import ChatScreen from './chat'
const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Light: LightScreen,
        Devices: DevicesScreen,
        Chat: ChatScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home`;
                    // iconName = `ios-home${focused ? '' : '-outline'}`;
                    // Không dùng Badge nếu dùng tạo thêm 1 class HomeIconWithBadge render <Icon>
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Light') {
                    iconName = `ios-flashlight`;
                }
                else if (routeName === 'Devices') {
                    iconName = `md-list-box`;
                }
                else if (routeName === 'Chat') {
                    iconName = `ios-chatbubbles`;
                }

                // You can return any component that you like here!
                // Phần này return lại icon mỗi tab có thể thay tùy ý hình chữ v.v...
                return <IconComponent name={iconName} size={32} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#212121',
            inactiveTintColor: '#fafafa',
            lazy: true,
            indicatorStyle: {
                backgroundColor: 'transparent'
            },
            tabStyle: {
                backgroundColor: '#36A051',
                fontWeight: 'bold',
            },
            style: {
            }
        },
    }
);
export default createAppContainer(TabNavigator);