import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { Colors, FontStyles } from '../../utils/theme';
import Button from '../../components/Button';
import ProgressBar from './components/ProgressBar';
import GridItem from './components/GridItem';

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

export const SignUp3 = ({ navigation, route }) => {

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

    const onNext = () => {
        navigation.navigate("SignUp4");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ProgressBar currentStep={2} totalStep={3} />

            <View style={styles.content}>
                <View style={{ marginVertical: 24 }}>
                    <Text style={[FontStyles.h4, { marginBottom: 8 }]}>
                        Let's find your match
                    </Text>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey, lineHeight: 20 }]}>
                        Select the categories of pets you're interested in, and we'll tailor our recommendations to match your preferences.
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={categories}
                        numColumns={3}
                        keyExtractor={(item) => item.text}
                        renderItem={({ index, item }) => (
                            <GridItem title={item.text} image={item.image} selected={isSelected(item)} onPress={() => onItemPress(item)} />
                        )}
                        scrollEnabled={false}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Button title={"Continue"} />
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
