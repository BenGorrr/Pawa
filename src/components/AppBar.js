import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";


const AppBar = ({ back }) => {
    const navigation = useNavigation();

    return (
        <View
            style={styles.container}
        >
            {
                back && (
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Image source={require("../assets/icons/arrow-left.png")} />
                    </TouchableOpacity>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: "6%"
    }
});


export default AppBar;