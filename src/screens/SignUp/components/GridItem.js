import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, FontStyles } from "../../../utils/theme";


const GridItem = ({ title, image, selected, onPress }) => {

    return (
        <View
            style={styles.gridItem}
        >
            <TouchableOpacity style={[styles.innerItem, selected && styles.selectedItem]}
                onPress={onPress}
            >
                <Image source={image} />
                <Text style={FontStyles.small_regular}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5
    },
    innerItem: {
        alignItems: "center",
        justifyContent: "center",
        padding: 18,
        borderColor: Colors.border_grey,
        borderWidth: 1,
        borderRadius: 16
    },
    selectedItem: {
        backgroundColor: Colors.secondary,
        borderColor: Colors.primary
    }
});


export default GridItem;