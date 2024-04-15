import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { Colors, FontStyles } from '../../utils/theme';
import Button from '../../components/Button';
import ProgressBar from './components/ProgressBar';
import GridItem from './components/GridItem';
import TextItem from './components/TextItem';
import Modal from '../../components/Modal';
import { CommonActions } from '@react-navigation/native';

const breeds = [
    "Persian",
    "Maine Coon",
    "Siamese",
    "Ragdoll",
    "Bengal",
    "Sphynx",
    "Scottish Fold",
    "Abyssinian",
    "Birman",
    "Russian Blue",
    "Siberian",
    "British Shorthair",
    "Exotic Shorthair",
    "Turkish Angora",
    "Manx",
    "Himalayan",
    "Devon Rex"
]

export const SignUp4 = ({ navigation, route }) => {

    const [selectedList, setSelectedList] = useState([]);
    const [successModal, setSuccessModal] = useState(false);

    const isSelected = (item) => {
        return selectedList.includes(item);
    }

    const onItemPress = (item) => {
        const existingIndex = selectedList.indexOf(item);
        if (existingIndex !== -1) {
            const updatedList = [...selectedList];
            updatedList.splice(existingIndex, 1);
            setSelectedList(updatedList); // Remove the item if it exists in the list
        } else {
            setSelectedList([...selectedList, item]); // Add the item to the list if it doesn't exist
        }
    }

    const onSubmit = () => {
        setSuccessModal(true);
    }

    const onNext = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'SignIn1' },
                ],
            })
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ProgressBar currentStep={3} totalStep={3} />

            <View style={styles.content}>
                <View style={{ marginVertical: 24 }}>
                    <Text style={[FontStyles.h4, { marginBottom: 8 }]}>
                        Breed preferences
                    </Text>
                    <Text style={[FontStyles.small_regular, { color: Colors.text_grey, lineHeight: 20 }]}>
                        Choose your preferred breed(s) to refine your pet recommendations.
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={breeds}
                        numColumns={3}
                        keyExtractor={(item) => item}
                        renderItem={({ index, item }) => (
                            <TextItem title={item} selected={isSelected(item)} onPress={() => onItemPress(item)} />
                        )}
                        scrollEnabled={false}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Button title={"Continue"} onPress={onSubmit} />
                </View>
            </View>
            <Modal visible={successModal} title={"Congratulations!"} body={"Your account has been successfully created. Welcome to our community!"} buttonText={"Continue"} onButtonPress={onNext} />
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
