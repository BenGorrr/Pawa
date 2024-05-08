import React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { CATEGORIES_DATA } from '../../DATA/Dashboard/dummy_data';
import { Colors, FontStyles, SCREEN_WIDTH } from '../../utils/theme';
import { CategoryButton } from './components/CategoryButton';
import { PetItem } from './components/PetItem';
import { PETS_DATA } from '../../DATA/Pets/dummy_data';

export const Dashboard = ({ navigation, route }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.header}>
                    <View style={{}}>
                        <Text style={[FontStyles.small_regular, { marginBottom: 2, color: Colors.text_grey }]}>
                            Current Location
                        </Text>
                        <Text style={[FontStyles.medium_semibold]}>
                            Melbourne, Australia
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Image source={require("../../assets/icons/search.png")} style={{ marginEnd: 16 }} />
                        <Pressable
                            onPress={() => navigation.navigate("Notifications")}
                        >
                            <Image source={require("../../assets/icons/bell.png")} />
                        </Pressable>
                    </View>
                </View>

                <View style={{ marginTop: 24 }}>
                    <Image source={require("../../assets/banner/banner1.png")} style={{ width: "100%", resizeMode: "stretch" }} />
                </View>

                <View style={{ marginTop: 24, flexDirection: "row", justifyContent: "space-between" }}>
                    {
                        CATEGORIES_DATA.map(category => <CategoryButton image={category.image} label={category.label} />)
                    }
                </View>

                <View style={{ marginTop: 24, marginBottom: 16 }}>
                    <View style={styles.sectionHeader}>
                        <Text style={FontStyles.h6}>Pets near you</Text>
                        <Pressable><Text style={[FontStyles.small_semibold, { color: Colors.primary }]}>View all</Text></Pressable>
                    </View>
                </View>

                <FlatList
                    data={PETS_DATA}
                    renderItem={({ item, index }) =>
                        <Pressable onPress={() => navigation.navigate("AdoptionStackScreen", { screen: "PetDetails", params: { pet: item } })}>
                            <PetItem item={item} />
                        </Pressable>
                    }
                    keyExtractor={item => item.name}
                    horizontal={true}
                    contentContainerStyle={{
                        gap: 12,
                        paddingEnd: 24 * 2
                    }}
                    style={{
                        width: SCREEN_WIDTH,
                        marginStart: -24, // offset the screen horizontal padding, 
                        paddingStart: 24, // so the list can scroll through
                    }}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={{ marginTop: 32, marginBottom: 16 }}>
                    <View style={styles.sectionHeader}>
                        <Text style={FontStyles.h6}>Based on your preferences</Text>
                        <Pressable><Text style={[FontStyles.small_semibold, { color: Colors.primary }]}>View all</Text></Pressable>
                    </View>
                </View>

                <FlatList
                    data={PETS_DATA}
                    renderItem={({ item, index }) =>
                        <Pressable onPress={() => navigation.navigate("AdoptionStackScreen", { screen: "PetDetails", params: { pet: item } })}>
                            <PetItem item={item} />
                        </Pressable>
                    }
                    keyExtractor={item => item.name}
                    horizontal={true}
                    contentContainerStyle={{
                        gap: 12,
                        paddingEnd: 24 * 2
                    }}
                    style={{
                        width: SCREEN_WIDTH,
                        marginStart: -24, // offset the screen horizontal padding, 
                        paddingStart: 24, // so the list can scroll through
                        marginBottom: 24
                    }}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: "6%"
    },
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
