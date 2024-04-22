import { Image, StyleSheet, Text, View } from "react-native";
import { FontStyles } from "../utils/theme";


const ComingSoon = () => {

    return (
        <View
            style={[styles.container]}
        >
            <Image source={require("../assets/icons/coming-soon.png")} />
            <Text style={[FontStyles.large_semibold, { marginTop: 25 }]}>Be excited!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});


export default ComingSoon;