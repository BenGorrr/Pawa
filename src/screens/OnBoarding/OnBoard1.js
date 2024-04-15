import React, { useCallback } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import 'react-native-gesture-handler';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Button from '../../components/Button';
import ListItem from './ListItem';
import PageIndicator from './PageIndicator';

const pages = [
    {
        image: require("../../assets/OnBoard/Pug.png"),
        text: "It's time to adopt your new best friend"
    },
    {
        image: require("../../assets/OnBoard/Bird.png"),
        text: "Give them the love they deserve"
    },
    {
        image: require("../../assets/OnBoard/Husky.png"),
        text: "Bring a new friend to your home"
    }
]

export const OnBoardScreen = ({ navigation, route }) => {

    const { width: SCREEN_WIDTH } = useWindowDimensions();

    const x = useSharedValue(0);
    const flatListIndex = useSharedValue(0);
    const flatListRef = useAnimatedRef();

    const onViewableItemsChanged = useCallback(
        ({ viewableItems, changed }) => {
            flatListIndex.value = viewableItems[0].index ?? 0;
            // console.log("index ", flatListIndex.value)
        },
        []
    );
    const scrollHandle = useAnimatedScrollHandler({
        onScroll: (event) => {
            x.value = event.contentOffset.x;
        }
    });

    const renderItem = useCallback(
        ({
            item,
            index,
        }) => {
            return <ListItem item={item} index={index} x={x} />;
        },
        [x]
    );

    const onNext = useCallback(() => {
        if (flatListIndex.value === 2) {
            console.log('Get Started');
            navigation.navigate("SignUp1")
            return;
        } else {
            flatListRef?.current?.scrollToIndex({
                index: flatListIndex.value + 1,
            });
        }
    }, []);

    return (
        <View style={styles.container}>
            <Animated.FlatList
                ref={flatListRef}
                onScroll={scrollHandle}
                horizontal
                scrollEventThrottle={16}
                pagingEnabled={true}
                data={pages}
                keyExtractor={(_, index) => index.toString()}
                bounces={false}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
            />
            <View style={{ position: "absolute", bottom: 52, width: "100%", paddingHorizontal: 52 }}>
                <PageIndicator length={3} x={x} />
                <Button title={"Continue"} onPress={onNext} style={{ marginTop: 30 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
