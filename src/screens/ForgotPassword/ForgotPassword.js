import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Colors, FontStyles } from '../../utils/theme';
import AppBar from '../../components/AppBar';


export const ForgotPassword = ({ navigation, route }) => {

    const [email, setEmail] = useState("")

    const onNext = () => {
        navigation.navigate("ForgotPassword_OTP");
    }

    return (
        <SafeAreaView style={styles.container}>
            <AppBar back />
            <View style={styles.content}>
                <View style={{ marginVertical: 24 }}>
                    <Text style={[FontStyles.h4, { marginBottom: 8 }]}>
                        Forgot Password
                    </Text>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey, lineHeight: 20 }]}>
                        Forgot your password? No worries! Enter your email address below, and we'll send you an OTP code.
                    </Text>
                </View>
                <View>
                    <Input label={"Email"} value={email} onChangeText={setEmail} textContentType="emailAddress" />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Button title={"Send OTP"} onPress={onNext} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        marginHorizontal: "6%"
    }
});
