import React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { CATEGORIES_DATA, PETS_DATA } from '../../DATA/Dashboard/dummy_data';
import { Colors, FontStyles } from '../../utils/theme';
import { CategoryButton } from './components/CategoryButton';
import { PetItem } from './components/PetItem';

export const Dashboard = ({ navigation, route }) => {

    return (
        <SafeAreaView style={styles.container}>
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
                    <Image source={require("../../assets/icons/bell.png")} />
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

            <View style={{ marginTop: 24 }}>
                <View style={styles.sectionHeader}>
                    <Text style={FontStyles.h6}>Pets near you</Text>
                    <Pressable><Text style={[FontStyles.small_semibold, { color: Colors.primary }]}>View all</Text></Pressable>
                </View>
            </View>

            <FlatList
                data={PETS_DATA}
                renderItem={({ item, index }) => <PetItem item={item} />}
                keyExtractor={item => item.name}
                horizontal={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: "6%"
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
