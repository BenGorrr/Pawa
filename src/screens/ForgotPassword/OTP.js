import React, { useEffect, useState } from 'react';
import { Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Colors, FontStyles } from '../../utils/theme';
import AppBar from '../../components/AppBar';
import OTPInput from './components/OTPInput';


export const ForgotPassword_OTP = ({ navigation, route }) => {

    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;

    const onNext = () => {
        navigation.navigate("ForgotPassword_Create");
    }

    useEffect(() => {
        if (otpCode.length == maximumCodeLength) {
            Keyboard.dismiss();
            onNext();
        }
    }, [otpCode])

    return (
        <SafeAreaView style={styles.container}>
            <AppBar back />
            <Pressable style={styles.content} onPress={Keyboard.dismiss}>
                <View style={{ marginVertical: 24 }}>
                    <Text style={[FontStyles.h4, { marginBottom: 8 }]}>
                        OTP Verification
                    </Text>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey, lineHeight: 20 }]}>
                        Please check your email for the OTP code to proceed.
                    </Text>
                </View>
                <View>
                    <OTPInput
                        code={otpCode}
                        setCode={setOTPCode}
                        maximumLength={maximumCodeLength}
                        setIsPinReady={setIsPinReady}
                    />
                </View>
                <View style={{ marginTop: 40, alignItems: "center" }}>
                    <Text style={[FontStyles.small_regular, { marginBottom: 16, color: Colors.text_grey }]}>You can resend the code in {50} seconds</Text>
                    <TouchableOpacity>
                        <Text style={[FontStyles.small_semibold, { color: Colors.primary }]}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
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
