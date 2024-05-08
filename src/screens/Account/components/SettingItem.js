import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FontStyles } from "../../../utils/theme";


export const SettingItem = ({ item, onPress }) => {
    const { icon, label } = item;

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={icon} />
            <View style={{
                flex: 1,
                marginStart: 16
            }}>
                <Text style={FontStyles.medium_medium}>{label}</Text>
            </View>
            <Image source={require("../../../assets/icons/account/chevron-right.png")} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 16
    },
    imageStyle: {
        marginBottom: 8
    }
})