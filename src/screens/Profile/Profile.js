import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { PROFILE_DATA } from '../../DATA/Account/dummy_data';


export const Profile = ({ navigation, route }) => {
    const profile = PROFILE_DATA;

    const [showPassword, setShowPassword] = useState(false);

    const onSave = () => {

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppBar back title={"Profile"} />
            <View style={styles.container}>
                <View style={{ alignItems: "center", marginVertical: 16 }}>
                    <Image source={profile.profileImage} />
                </View>
                <View style={{ flex: 1 }}>
                    <Input placeholder={"Name"} label={"Name"} value={profile.name} style={{ marginBottom: 16 }} />

                    <Input placeholder={"Email"} label={"Email"} value={profile.email} style={{ marginBottom: 16 }} />
                    <Input placeholder={"Password"} label={"Password"} secureTextEntry={!showPassword}
                        rightIcon={require("../../assets/icons/eye.png")}
                        onIconPress={() => { setShowPassword(!showPassword) }}
                    />
                </View>
                <Button title={"Save"} onPress={onSave} />

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
