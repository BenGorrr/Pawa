import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { Colors, FontStyles } from '../../utils/theme';
import Button from '../../components/Button';
import ProgressBar from './components/ProgressBar';


export const SignUp2 = ({ navigation, route }) => {

    const [role, setRole] = useState("adopter") // adopter, owner

    const onNext = () => {
        navigation.navigate("SignUp3");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ProgressBar currentStep={1} totalStep={3} />

            <View style={styles.content}>
                <View style={{ marginVertical: 24 }}>
                    <Text style={[FontStyles.h4, { marginBottom: 8 }]}>
                        Tell us about yourself
                    </Text>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey, lineHeight: 20 }]}>
                        Tell us a bit about yourself to personalize your experience. Are you a Pet Adopter looking for a furry friend, a Pet Owner seeking resources and community, or an Organization dedicated to pet welfare?
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={[styles.cardContainer, role == "adopter" && styles.selectedCard]}
                        onPress={() => setRole("adopter")}
                    >
                        <Image source={
                            role == "adopter" ? require("../../assets/icons/dog_selected.png")
                                : require("../../assets/icons/dog.png")} style={{ marginEnd: 8 }} />
                        <Text style={FontStyles.medium_medium}>Pet Adopter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cardContainer, role == "owner" && styles.selectedCard]}
                        onPress={() => setRole("owner")}
                    >
                        <Image source={
                            role == "owner" ? require("../../assets/icons/user-circle_selected.png")
                                : require("../../assets/icons/user-circle.png")} style={{ marginEnd: 8 }} />
                        <Text style={FontStyles.medium_medium}>Pet Owner or Organization</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Button title={"Continue"} onPress={onNext} />
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
    },
    cardContainer: {
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 12,
        paddingVertical: 32,
    },
    selectedCard: {
        borderColor: Colors.primary,
        backgroundColor: Colors.secondary
    }
});
