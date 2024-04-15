import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { Colors, FontStyles } from '../../utils/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';


export const SignIn1 = ({ navigation, route }) => {

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = () => {
        // navigation.navigate("SignUp2");
    }

    const onSignUp = () => {
        navigation.navigate("SignUp1");
    }

    const onForgotPassword = () => {
        navigation.navigate("ForgotPassword");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginVertical: 24 }}>
                <Text style={[FontStyles.h4, { marginBottom: 8 }]}>
                    Welcome Back!
                </Text>
                <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>
                    Log in to continue your journey with us. We're excited to have you back!
                </Text>
            </View>
            <View>
                <Input placeholder={"Email"} label={"Email"} style={{ marginBottom: 16 }} />
                <Input placeholder={"Password"} label={"Password"} secureTextEntry={!showPassword}
                    rightIcon={require("../../assets/icons/eye.png")}
                    onIconPress={() => { setShowPassword(!showPassword) }}
                    style={{ marginBottom: 16 }}
                />
                <TouchableOpacity onPress={onForgotPassword}>
                    <Text style={[FontStyles.small_semibold, { color: Colors.primary, alignSelf: "flex-end" }]}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 24 }}>
                <Button title={"Sign In"} onPress={onSubmit} />
                <View style={{ alignItems: "center", marginTop: 8 }}>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[FontStyles.small_medium, { color: Colors.text_grey }]}>Don't have an account? </Text>
                    <TouchableOpacity onPress={onSignUp}>
                        <Text style={[FontStyles.small_medium, { color: Colors.primary }]}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: "6%"
    },
});
