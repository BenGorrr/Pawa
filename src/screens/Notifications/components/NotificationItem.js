import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, FontStyles } from "../../../utils/theme";


export const NotificationItem = ({ item }) => {
    const { time, title, message } = item;

    return (
        <Pressable style={styles.container}>
            {/* <View style={styles.imageStyle}>
                <Image source={item.image} />
            </View> */}
            <View style={{
                marginVertical: 8,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text style={[FontStyles.medium_semibold, { flex: 1 }]}>{title}</Text>
                <Text style={[FontStyles.XSmall_medium, { color: Colors.text_grey }]}>{time}</Text>
            </View>
            <Text style={[FontStyles.small_regular, { color: Colors.text_grey }]}>{message}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24
    },
    imageStyle: {
        marginBottom: 8
    }
})