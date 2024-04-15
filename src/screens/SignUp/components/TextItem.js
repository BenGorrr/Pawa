import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, FontStyles } from "../../../utils/theme";


const TextItem = ({ title, selected, onPress }) => {

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity style={[styles.innerItem, selected && styles.selectedItem]}
                onPress={onPress}
            >
                <Text style={FontStyles.small_regular}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 8
    },
    innerItem: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderColor: Colors.border_grey,
        borderWidth: 1,
        borderRadius: 100
    },
    selectedItem: {
        backgroundColor: Colors.secondary,
        borderColor: Colors.primary
    }
});


export default TextItem;