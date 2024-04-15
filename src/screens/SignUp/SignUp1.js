import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Colors, FontStyles } from '../../utils/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';


export const SignUp1 = ({ navigation, route }) => {

    const [showPassword, setShowPassword] = useState(false);

    const onNext = () => {
        navigation.navigate("SignUp2");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginVertical: 24 }}>
                <Text style={[FontStyles.h4, { marginBottom: 8 }]}>
                    Create Your Account
                </Text>
                <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>
                    Welcome! Fill out the form below to create your account and start exploring our platform.
                </Text>
            </View>
            <View>
                <Input placeholder={"Name"} label={"Name"} style={{ marginBottom: 16 }} />

                <Input placeholder={"Email"} label={"Email"} style={{ marginBottom: 16 }} />
                <Input placeholder={"Password"} label={"Password"} secureTextEntry={!showPassword}
                    rightIcon={require("../../assets/icons/eye.png")}
                    onIconPress={() => { setShowPassword(!showPassword) }}
                />
            </View>
            <View style={{ marginTop: 16 }}>
                <Button title={"Sign Up"} onPress={onNext} />
                <View style={{ alignItems: "center", marginTop: 8 }}>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey, marginBottom: 4 }]}>
                        By registering you agree to
                    </Text>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>
                        <Text style={{ color: Colors.primary }}>Terms & Conditions </Text>
                        and
                        <Text style={{ color: Colors.primary }}> Privacy Policy</Text>
                    </Text>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey, marginTop: 24 }]}>
                        Already have an account?
                        <Text style={{ color: Colors.primary }}> Sign In</Text>
                    </Text>
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
