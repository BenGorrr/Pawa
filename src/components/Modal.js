import { StyleSheet, Text, TouchableOpacity, View, Modal as RNModal, Image } from "react-native";
import { Colors, FontFamily, FontStyles } from "../utils/theme";
import Button from "./Button";


const Modal = ({ visible, title, body, buttonText, onButtonPress, style }) => {

    return (
        <RNModal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                console.warn("closed");
            }}
        >
            <View style={styles.container}>
                <View style={styles.View}>
                    <Image source={require("../assets/icons/tick.png")} style={{ marginBottom: 24 }} />
                    <Text style={[FontStyles.large_semibold, { fontFamily: FontFamily.bold, paddingBottom: 8 }]}>{title}</Text>
                    <Text style={[FontStyles.medium_regular, { color: Colors.text_grey, textAlign: "center" }]}>{body}</Text>
                    <Button title={buttonText} onPress={onButtonPress} style={{ marginTop: 24 }} />
                </View>
            </View>
        </RNModal>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    View: {
        backgroundColor: "white",
        width: "80%",
        padding: 30,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center"
    },
});


export default Modal;