import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    useWindowDimensions
} from 'react-native';
import {
    useAnimatedStyle
} from 'react-native-reanimated';
import { FontStyles } from '../../utils/theme';

const ListItem = ({ item, index, x }) => {
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

    return (
        <ImageBackground
            source={item.image}
            style={[styles.itemContainer, {
                width: SCREEN_WIDTH,
                paddingTop: SCREEN_HEIGHT * 0.6,
            }]}
        >
            <Text style={styles.title}>
                {item.text}
            </Text>
        </ImageBackground>
    );
};

export default React.memo(ListItem);

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 52
    },
    textItem: {
        fontWeight: '600',
        lineHeight: 41,
        fontSize: 34,
    },
    title: {
        ...FontStyles.large_semibold,
        fontSize: 24,
        textAlign: "center"
    }
});