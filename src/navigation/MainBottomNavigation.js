import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComingSoon from '../components/ComingSoon';
import { Dashboard } from '../screens/Dashboard/Dashboard';
import { Image } from 'react-native';
import { Colors, FontStyles } from '../utils/theme';
import { AccountStackScreen, HomeStackScreen } from './Application';

const Tab = createBottomTabNavigator();

export const MainBottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarLabelStyle: FontStyles.XSmall_regular,
                tabBarStyle: { paddingHorizontal: 16, paddingTop: 16, height: 88 },
            }}
            sceneContainerStyle={{ backgroundColor: "white" }}
        >
            <Tab.Screen
                name="HomeStack" component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/icons/bottomTab/home.png")} style={{ tintColor: focused && Colors.primary }} />
                    ),
                }}
            />
            <Tab.Screen name="Maps" component={ComingSoon}
                options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/icons/bottomTab/map.png")} style={{ tintColor: focused && Colors.primary }} />
                    ),
                }}
            />
            <Tab.Screen name="Favorites" component={ComingSoon}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/icons/bottomTab/heart.png")} style={{ tintColor: focused && Colors.primary }} />
                    ),
                }}
            />
            <Tab.Screen name="Message" component={ComingSoon}
                options={{
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/icons/bottomTab/message.png")} style={{ tintColor: focused && Colors.primary }} />
                    ),
                }}
            />
            <Tab.Screen name="AccountStack" component={AccountStackScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/icons/bottomTab/user.png")} style={{ tintColor: focused && Colors.primary }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}