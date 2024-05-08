import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard/Dashboard';
import { ForgotPassword_Create } from '../screens/ForgotPassword/CreatePassword';
import { ForgotPassword } from '../screens/ForgotPassword/ForgotPassword';
import { ForgotPassword_OTP } from '../screens/ForgotPassword/OTP';
import { Notifications } from '../screens/Notifications/Notifications';
import { OnBoardScreen } from '../screens/OnBoarding/OnBoard1';
import { SignIn1 } from '../screens/SignIn/SignIn1';
import { SignUp1 } from '../screens/SignUp/SignUp1';
import { SignUp2 } from '../screens/SignUp/SignUp2';
import { SignUp3 } from '../screens/SignUp/SignUp3';
import { SignUp4 } from '../screens/SignUp/SignUp4';
import { MainBottomNavigation } from './MainBottomNavigation';
import { Account } from '../screens/Account/Account';
import { Profile } from '../screens/Profile/Profile';
import { PetDetails } from '../screens/Adoption/PetDetails';

const MainStack = createStackNavigator();

const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

const MainNavigator = () => {
    const userToken = true;

    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#fff"
                }
            }}
        >
            {
                userToken == null ? (
                    <>
                        <MainStack.Screen name="OnBoardScreen" component={OnBoardScreen} />
                        <MainStack.Screen name="SignUp1" component={SignUp1} />
                        <MainStack.Screen name="SignUp2" component={SignUp2} />
                        <MainStack.Screen name="SignUp3" component={SignUp3} />
                        <MainStack.Screen name="SignUp4" component={SignUp4} />
                        <MainStack.Screen name="SignIn1" component={SignIn1} />
                        <MainStack.Screen name="ForgotPassword" component={ForgotPassword} />
                        <MainStack.Screen name="ForgotPassword_OTP" component={ForgotPassword_OTP} />
                        <MainStack.Screen name="ForgotPassword_Create" component={ForgotPassword_Create} />
                    </>
                ) : (
                    <>
                        <MainStack.Screen name="MainBottomNavigation" component={MainBottomNavigation} />
                        <MainStack.Screen name="AdoptionStackScreen" component={AdoptionStackScreen} />
                        <MainStack.Screen name="Notifications" component={Notifications} />
                    </>
                )
            }
        </MainStack.Navigator>
    )
}

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {

    return (
        <HomeStack.Navigator initialRouteName='Dashboard'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#fff"
                }
            }}
        >
            <HomeStack.Screen name="Dashboard" component={Dashboard} />
        </HomeStack.Navigator>
    );
}

const AdoptionStack = createStackNavigator();

export const AdoptionStackScreen = () => {

    return (
        <AdoptionStack.Navigator initialRouteName='PetDetails'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#fff"
                }
            }}
        >
            <AdoptionStack.Screen name="PetDetails" component={PetDetails} />
        </AdoptionStack.Navigator>
    );
}

const AccountStack = createStackNavigator();

export const AccountStackScreen = () => {

    return (
        <AccountStack.Navigator initialRouteName='Account'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#fff"
                }
            }}
        >
            <AccountStack.Screen name="Account" component={Account} />
            <AccountStack.Screen name="Profile" component={Profile} />
        </AccountStack.Navigator>
    );
}

export default ApplicationNavigator;