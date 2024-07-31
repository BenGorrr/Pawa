import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, FontStyles } from "../../../utils/theme";
import { BottomModal } from "../../../components/BottomModal";

const PAYMENT_METHODS = [
    {
        id: 1,
        name: "Paypal"
    },
    {
        id: 2,
        name: "Cash"
    }
]

export const PaymentModal = ({ isVisible, onClose, value, onSelect }) => {

    return (
        <BottomModal
            title={"Payment Method"}
            visible={isVisible}
            // onCancel={onClose}
            onConfirm={onClose}
        >
            <View style={{ paddingTop: 12 }}>
                <FlatList
                    data={PAYMENT_METHODS}
                    keyExtractor={(item) => item.id}
                    renderItem={({ index, item }) => (
                        <Pressable style={[styles.paymentItem, value?.id == item.id && styles.focusedPaymentItem]} onPress={() => onSelect(item)}>
                            <Text style={FontStyles.medium_semibold}>{item.name}</Text>
                            <View style={[styles.radioButton, value?.id == item.id && styles.focusedRadioButton]}>
                                {
                                    value?.id == item.id && <View style={{ backgroundColor: Colors.primary, alignSelf: "center", padding: 4, borderRadius: 20 }} />
                                }
                            </View>
                        </Pressable>
                    )}
                    scrollEnabled={false}
                />
            </View>
        </BottomModal>
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
    },
    paymentItem: {
        padding: 16,
        borderColor: Colors.border_grey,
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    focusedPaymentItem: {
        borderColor: Colors.primary
    },
    radioButton: {
        borderWidth: 1,
        borderColor: Colors.border_grey,
        borderRadius: 20,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    focusedRadioButton: {
        borderColor: Colors.primary,
        // backgroundColor: Colors.primary
        // padding: 8
    }
})