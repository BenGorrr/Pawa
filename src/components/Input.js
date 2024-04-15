import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors, FontStyles } from "../utils/theme";


const Input = ({ label, placeholder, value, onChangeText, style, secureTextEntry, rightIcon, onIconPress }) => {

    return (
        <View
            style={[styles.container, style]}
        >
            <Text style={[FontStyles.small_medium, styles.label]}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.icon_grey}
                    style={styles.input}
                    secureTextEntry={secureTextEntry}
                />
                {
                    rightIcon && (
                        <TouchableOpacity onPress={onIconPress}>
                            <Image source={rightIcon} />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#fff",
    },
    label: {
        color: Colors.black,
        marginBottom: 6
    },
    input: {
        flex: 1,
        paddingVertical: 14,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.border_grey,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center"
    }
});


export default Input;