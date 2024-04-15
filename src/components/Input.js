import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors, FontStyles } from "../utils/theme";
import { useState } from "react";


const Input = ({ label, placeholder, value, onChangeText, style, secureTextEntry, rightIcon, onIconPress, ...restProps }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            style={[styles.container, style]}
        >
            <Text style={[FontStyles.small_medium, styles.label]}>{label}</Text>
            <View style={[styles.outerContainer, isFocused && styles.outerContainerFocused]}>
                <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
                    <TextInput
                        onChangeText={onChangeText}
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.icon_grey}
                        style={[styles.input, isFocused && styles.inputFocused]}
                        secureTextEntry={secureTextEntry}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        autoCapitalize="none"
                        {...restProps}
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
        paddingVertical: 14
    },
    inputContainer: {
        borderWidth: .5,
        borderRadius: 15,
        borderColor: Colors.border_grey,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    inputContainerFocused: {
        borderColor: Colors.primary
    },
    inputFocused: {

    },
    outerContainer: {
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Colors.border_grey,
    },
    outerContainerFocused: {
        borderColor: Colors.secondary
    }
});


export default Input;