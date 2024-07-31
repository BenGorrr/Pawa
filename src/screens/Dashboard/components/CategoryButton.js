import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, FontStyles } from "../../../utils/theme";


export const CategoryButton = ({ image, label, onPress }) => {

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.imageStyle}>
                <Image source={image} />
            </View>
            <Text style={FontStyles.small_regular}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    imageStyle: {
        borderWidth: 1,
        borderColor: Colors.border_grey,
        borderRadius: 96,
        padding: 16,
        marginBottom: 8
    }
})