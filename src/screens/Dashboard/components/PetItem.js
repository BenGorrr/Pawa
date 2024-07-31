import { Image, StyleSheet, Text, View } from "react-native";
import { Colors, FontStyles } from "../../../utils/theme";


export const PetItem = ({ item, style }) => {

    return (
        <View style={[styles.container, style]}>
            <View style={styles.imageStyle}>
                <Image source={item.image} style={{ width: "100%", height: undefined, aspectRatio: 1 }} />
            </View>
            <View style={{
                marginTop: 8,
                flexDirection: "row"
            }}>
                <Text style={FontStyles.medium_semibold}>{item.name}</Text>
                <Image source={
                    item.gender == "M" ? require("../../../assets/icons/dashboard/male.png")
                        : require("../../../assets/icons/dashboard/female.png")
                } />
            </View>
            <View style={{
                marginTop: 8,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Image source={require("../../../assets/icons/dashboard/map-pin.png")} />
                <Text style={[FontStyles.XSmall_regular, { color: Colors.text_grey, marginStart: 4 }]}>{item.distance} - {item.area}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start"
    },
    imageStyle: {
        marginBottom: 8,
        width: "100%"
    }
})