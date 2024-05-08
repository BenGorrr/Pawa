import React, { useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PROFILE_DATA } from '../../DATA/Account/dummy_data';
import BottomModal from '../../components/BottomModal';
import Button from '../../components/Button';
import { Colors, FontStyles } from '../../utils/theme';
import TextItem from '../SignUp/components/TextItem';
import { SettingItem } from './components/SettingItem';

const categories = [
    {
        text: "Dogs",
        image: require("../../assets/icons/category/dogs.png")
    },
    {
        text: "Cats",
        image: require("../../assets/icons/category/cats.png")
    },
    {
        text: "Birds",
        image: require("../../assets/icons/category/birds.png")
    },
    {
        text: "Rabbits",
        image: require("../../assets/icons/category/rabbits.png")
    },
    {
        text: "Primates",
        image: require("../../assets/icons/category/primates.png")
    },
    {
        text: "Reptiles",
        image: require("../../assets/icons/category/reptiles.png")
    },
    {
        text: "Fish",
        image: require("../../assets/icons/category/fish.png")
    },
    {
        text: "Heroes",
        image: require("../../assets/icons/category/heroes.png")
    },
    {
        text: "Other",
        image: require("../../assets/icons/category/other.png")
    }
]

const PetPreferencesModal = ({ visible, setVisible }) => {
    const [selectedList, setSelectedList] = useState([]);

    const isSelected = (item) => {
        return selectedList.some(obj => obj.text === item.text);
    }

    const onItemPress = (item) => {
        const existingIndex = selectedList.findIndex(obj => obj.text === item.text);
        if (existingIndex !== -1) {
            const updatedList = [...selectedList];
            updatedList.splice(existingIndex, 1);
            setSelectedList(updatedList); // Remove the item if it exists in the list
        } else {
            setSelectedList([...selectedList, item]); // Add the item to the list if it doesn't exist
        }
    }

    return (
        <BottomModal
            title={"Pet Preferences"}
            visible={visible}
            onCancel={() => setVisible(false)}
            onConfirm={() => setVisible(false)}
        >
            <View>
                <FlatList
                    data={categories}
                    numColumns={4}
                    keyExtractor={(item) => item.text}
                    renderItem={({ index, item }) => (
                        <TextItem title={item.text} selected={isSelected(item)} onPress={() => onItemPress(item)} />
                    )}
                    scrollEnabled={false}
                />
            </View>
        </BottomModal>
    )
}

export const Account = ({ navigation, route }) => {
    const profile = PROFILE_DATA;

    const [petPreferencesVisible, setPetPreferencesVisible] = useState(false);

    const PERSONAL_MENU = [
        {
            icon: require("../../assets/icons/account/user.png"),
            label: "Profile",
            action: () => {
                navigation.navigate("Profile")
            }
        },
        {
            icon: require("../../assets/icons/account/dog.png"),
            label: "Pet Preferences",
            action: () => {
                setPetPreferencesVisible(true);
            }
        },
    ]

    const SECURITY_MENU = [
        {
            icon: require("../../assets/icons/account/shield.png"),
            label: "Account & Security",
            action: ""
        },
        {
            icon: require("../../assets/icons/account/arrows-up-down.png"),
            label: "Account Linked",
            action: ""
        },
    ]

    const GENERAL_MENU = [
        {
            icon: require("../../assets/icons/account/bell.png"),
            label: "Notifications",
            action: ""
        },
        {
            icon: require("../../assets/icons/account/eye.png"),
            label: "Appearance",
            action: ""
        },
        {
            icon: require("../../assets/icons/account/stairs-up.png"),
            label: "Data & Analytics",
            action: ""
        },
        {
            icon: require("../../assets/icons/account/users.png"),
            label: "Invite Friends",
            action: ""
        }
    ]

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
                            <SettingItem key={item.label} item={item} onPress={item.action} />
                        )
                    }
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>Security</Text>
                    </View>
                    {
                        SECURITY_MENU.map(item =>
                            <SettingItem key={item.label} item={item} />
                        )
                    }
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>General</Text>
                    </View>
                    {
                        GENERAL_MENU.map(item =>
                            <SettingItem key={item.label} item={item} />
                        )
                    }
                </View>
            </ScrollView>
            <PetPreferencesModal visible={petPreferencesVisible} setVisible={setPetPreferencesVisible} />
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
