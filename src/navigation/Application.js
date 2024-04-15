import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoardScreen } from '../screens/OnBoarding/OnBoard1';
import { SignUp1 } from '../screens/SignUp/SignUp1';
import { SignUp2 } from '../screens/SignUp/SignUp2';
import { SignUp3 } from '../screens/SignUp/SignUp3';
import { SignUp4 } from '../screens/SignUp/SignUp4';
import { SignIn1 } from '../screens/SignIn/SignIn1';

const MainStack = createStackNavigator();

const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

const MainNavigator = () => {
    const userToken = null;

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
                    </>
                ) : (
                    <>
                    </>
                )
            }
        </MainStack.Navigator>
    )
}

export default ApplicationNavigator;