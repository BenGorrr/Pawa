import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors, FontStyles } from '../../utils/theme';
import { PROFILE_DATA } from '../../DATA/Account/dummy_data';
import Button from '../../components/Button';
import { SettingItem } from './components/SettingItem';

const PERSONAL_MENU = [
    {
        icon: require("../../assets/icons/account/user.png"),
        label: "Profile",
        nav: ""
    },
    {
        icon: require("../../assets/icons/account/dog.png"),
        label: "Pet Preferences",
        nav: ""
    },
]

const SECURITY_MENU = [
    {
        icon: require("../../assets/icons/account/shield.png"),
        label: "Account & Security",
        nav: ""
    },
    {
        icon: require("../../assets/icons/account/arrows-up-down.png"),
        label: "Account Linked",
        nav: ""
    },
]

const GENERAL_MENU = [
    {
        icon: require("../../assets/icons/account/bell.png"),
        label: "Notifications",
        nav: ""
    },
    {
        icon: require("../../assets/icons/account/eye.png"),
        label: "Appearance",
        nav: ""
    },
    {
        icon: require("../../assets/icons/account/stairs-up.png"),
        label: "Data & Analytics",
        nav: ""
    },
    {
        icon: require("../../assets/icons/account/users.png"),
        label: "Invite Friends",
        nav: ""
    }
]


export const Account = ({ navigation, route }) => {
    const profile = PROFILE_DATA;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <Text style={FontStyles.h6}>Account</Text>
                <View style={styles.infoContainer}>
                    <Image source={profile.profileImage} />
                    <View style={{
                        justifyContent: "center",
                        marginStart: 8
                    }}>
                        <Text style={FontStyles.h6}>{profile.name}</Text>
                        <Text style={[FontStyles.small_regular, { color: Colors.text_grey, marginTop: 6 }]}>{profile.email}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Button title={"Edit Profile"} style={{ width: "80%" }} />
                    <Pressable style={{
                        borderRadius: 1000,
                        backgroundColor: Colors.secondary,
                        padding: 15
                    }}>
                        <Image source={require("../../assets/icons/account/share.png")} />
                    </Pressable>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>Personal Info</Text>
                    </View>
                    {
                        PERSONAL_MENU.map(item =>
                            <SettingItem item={item} />
                        )
                    }
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>Security</Text>
                    </View>
                    {
                        SECURITY_MENU.map(item =>
                            <SettingItem item={item} />
                        )
                    }
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>General</Text>
                    </View>
                    {
                        GENERAL_MENU.map(item =>
                            <SettingItem item={item} />
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: "6%",
        paddingTop: 24
    },
    sectionContainer: {
        marginVertical: 16
    },
    sectionHeader: {
        // marginVertical: 16
    },
    infoContainer: {
        flexDirection: "row",
        marginVertical: 16
    }
});
