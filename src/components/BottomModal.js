import { Modal as RNModal, StyleSheet, Text, View } from "react-native";
import { Colors, FontStyles } from "../utils/theme";
import Button from "./Button";


export const BottomModal = ({ visible, title, onConfirm, onCancel, children }) => {
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
                    <Text style={[FontStyles.h6, { paddingBottom: 8, alignSelf: "center" }]}>{title}</Text>
                    <View>
                        {children}
                    </View>
                    <View style={[styles.buttonContainer]}>
                        {
                            onCancel &&
                            <View style={[styles.button, { marginEnd: 6 }]}>
                                <Button
                                    title={"Cancel"}
                                    onPress={onCancel}
                                    style={{ marginTop: 24, backgroundColor: "white", borderColor: Colors.primary, borderWidth: 1 }}
                                    textStyle={{ color: Colors.primary }}
                                />
                            </View>
                        }
                        <View style={[styles.button, { marginStart: 6 }]}>
                            <Button title={"Confirm"} onPress={onConfirm} style={{ marginTop: 24 }} />
                        </View>
                    </View>
                </View>
            </View>
        </RNModal>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        justifyContent: 'flex-end',
    },
    View: {
        backgroundColor: "white",
        padding: 30,
        borderRadius: 32,
        // alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        flexDirection: "row"
    },
    button: {
        flex: 1
    }
});

