import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, FontStyles } from "../utils/theme";


const Button = ({ title, onPress, style }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, style]}
        >
            <Text style={[FontStyles.medium_semibold, styles.title]}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        marginVertical: 10,
        alignItems: "center",
        borderRadius: 100
    },
    title: {
        color: Colors.white,
    }
});


export default Button;