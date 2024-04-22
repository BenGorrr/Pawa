import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, FontStyles } from "../../../utils/theme";


export const PetItem = ({ item }) => {

    return (
        <Pressable style={styles.container}>
            <View style={styles.imageStyle}>
                <Image source={item.image} />
            </View>
            <View style={{
                marginTop: 8,
                flexDirection: "row",

            }}>
                <Text style={FontStyles.medium_semibold}>{item.name}</Text>
                <Image source={
                    item.gender == "M" ? require("../../../assets/icons/dashboard/male.png")
                        : require("../../../assets/icons/dashboard/female.png")
                } />
            </View>
            <View style={{
                marginTop: 8,
                flexDirection: "row"
            }}>
                <Image source={require("../../../assets/icons/dashboard/map-pin.png")} />
                <Text style={FontStyles.XSmall_regular}>{item.distance} - {item.area}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    imageStyle: {
        marginBottom: 8
    }
})