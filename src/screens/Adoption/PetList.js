import React from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { PETS_DATA } from '../../DATA/Pets/dummy_data';
import AppBar from '../../components/AppBar';
import { PetItem } from '../Dashboard/components/PetItem';


export const PetList = ({ navigation, route }) => {
    const category = route.params.category;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppBar back title={category} search />
            <View style={styles.container}>
                <FlatList
                    data={PETS_DATA}
                    renderItem={({ item, index }) =>
                        <Pressable style={{ flex: 1 / 2, alignItems: "center" }} onPress={() => navigation.navigate("PetDetails", { pet: item })}>
                            <PetItem item={item} style={{ width: "90%" }} />
                        </Pressable>
                    }
                    keyExtractor={item => item.name}
                    contentContainerStyle={{
                        gap: 24,
                        paddingTop: 24
                    }}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: "6%"
    }
});
