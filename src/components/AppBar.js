import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontStyles } from "../utils/theme";


const AppBar = ({ back, title, menu, search }) => {
    const navigation = useNavigation();

    return (
        <View
            style={styles.container}
        >
            {
                back && (
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <TouchableOpacity onPress={navigation.goBack}>
                            <Image source={require("../assets/icons/arrow-left.png")} />
                        </TouchableOpacity>
                    </View>
                )
            }
            {
                title && (
                    <Text style={[FontStyles.medium_semibold, {
                        position: "absolute",
                        alignSelf: "center"
                    }]}>{title}</Text>
                )
            }
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>

                {
                    search && (
                        <View style={{ paddingEnd: 12 }}>
                            <TouchableOpacity onPress={navigation.goBack}>
                                <Image source={require("../assets/icons/search.png")} />
                            </TouchableOpacity>
                        </View>
                    )
                }
                {
                    menu && (
                        <View style={{}}>
                            <TouchableOpacity onPress={navigation.goBack}>
                                <Image source={require("../assets/icons/dots-vertical.png")} />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: "6%",
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center"
    }
});


export default AppBar;