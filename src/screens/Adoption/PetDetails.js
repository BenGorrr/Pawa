import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import { Colors, FontStyles, SCREEN_WIDTH } from '../../utils/theme';


export const PetDetails = ({ navigation, route }) => {
    const pet = route.params.pet;

    const onAdopt = () => {
        navigation.navigate("Adopt_Info", { pet: pet })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppBar back title={"Details"} />
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: "center", marginVertical: 16 }}>
                        <Image source={pet.image} style={{ width: "100%", height: undefined, aspectRatio: 1, resizeMode: "stretch" }} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[FontStyles.h6]}>{pet.name} <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}> {"(" + pet.breed + ")"}</Text> </Text>

                        <View style={{
                            marginTop: 12,
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <Image source={require("../../assets/icons/dashboard/map-pin.png")} />
                            <Text style={[FontStyles.XSmall_medium, { color: Colors.text_grey, marginStart: 4 }]}>{pet.distance} - {pet.area}</Text>
                        </View>

                        <View style={[styles.bioContainer]}>
                            <View style={styles.bioItem}>
                                <Text style={[FontStyles.XSmall_regular, { color: Colors.text_grey, marginBottom: 2 }]}>Gender</Text>
                                <Text style={[FontStyles.medium_medium]}>{pet.gender == "M" ? "Male" : "Female"}</Text>
                            </View>
                            <View style={styles.bioItem}>
                                <Text style={[FontStyles.XSmall_regular, { color: Colors.text_grey, marginBottom: 2 }]}>Age</Text>
                                <Text style={[FontStyles.medium_medium]}>{pet.age}</Text>
                            </View>
                            <View style={styles.bioItem}>
                                <Text style={[FontStyles.XSmall_regular, { color: Colors.text_grey, marginBottom: 2 }]}>Size</Text>
                                <Text style={[FontStyles.medium_medium]}>{pet.size}</Text>
                            </View>
                        </View>
                        <View style={styles.ownerInfoContainer}>
                            <Image source={pet.ownerImage} style={{ marginEnd: 12 }} />
                            <View>
                                <Text style={[FontStyles.medium_semibold]}>{pet.ownerName}</Text>
                                <Text style={[FontStyles.small_regular, { marginTop: 4, color: Colors.text_grey }]}>{pet.ownerLocation}</Text>
                            </View>
                            <Pressable style={{ marginStart: "auto" }}>
                                <Image source={require("../../assets/icons/location.png")} />
                            </Pressable>
                        </View>
                        <View style={styles.aboutContainer}>
                            <Text style={[FontStyles.h6]}>About {pet.name}</Text>
                            <Text style={[FontStyles.small_regular, { marginTop: 8, color: Colors.text_grey }]}>{pet.petDescription}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.footer]}>
                    <View style={{ flex: 1 }}>
                        <Pressable>
                            <Image source={require("../../assets/icons/AddFavorite.png")} />
                        </Pressable>
                    </View>
                    <View style={{ flex: 5 }}>
                        <Button title={"Adopt Now"} onPress={onAdopt} />
                    </View>
                </View>

            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: "6%"
    },
    bioContainer: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bioItem: {
        marginVertical: 12,
        backgroundColor: Colors.light_grey,
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        width: SCREEN_WIDTH / 4
    },
    ownerInfoContainer: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    aboutContainer: {
        marginTop: 12,
        paddingBottom: 12
    },
    footer: {
        backgroundColor: "#fff",
        marginHorizontal: "6%",
        flexDirection: "row",
        alignItems: "center"
    }
});
