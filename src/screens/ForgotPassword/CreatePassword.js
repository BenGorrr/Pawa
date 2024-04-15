import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Colors, FontStyles } from '../../utils/theme';
import AppBar from '../../components/AppBar';
import Modal from '../../components/Modal';
import { CommonActions } from '@react-navigation/native';


export const ForgotPassword_Create = ({ navigation, route }) => {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const onNext = () => {
        setSuccessModal(false);
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'SignIn1' },
                ],
            })
        );
    }

    const onCreate = () => {
        setSuccessModal(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <AppBar back />
            <View style={styles.content}>
                <View style={{ marginVertical: 24 }}>
                    <Text style={[FontStyles.h4, { marginBottom: 8 }]}>
                        Create New Password
                    </Text>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey, lineHeight: 20 }]}>
                        Set a new password for your account to complete the process.
                    </Text>
                </View>
                <View>
                    <Input label={"New Password"} value={password} onChangeText={setPassword} secureTextEntry={!showPassword} style={{ marginBottom: 16 }} rightIcon={require("../../assets/icons/eye.png")} onIconPress={() => setShowPassword(!showPassword)} />
                    <Input label={"Confirm Password"} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={!showConfirmPassword} rightIcon={require("../../assets/icons/eye.png")} onIconPress={() => setShowConfirmPassword(!showConfirmPassword)} />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Button title={"Create New Password"} onPress={onCreate} />
                </View>
            </View>
            <Modal visible={successModal} title={"Password Changed!"} body={"Your password has been changed successfully. You can now log in with your new credentials."} buttonText={"Go to Home"} onButtonPress={onNext} />
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
