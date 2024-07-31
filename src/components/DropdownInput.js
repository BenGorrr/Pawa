import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors, FontStyles } from "../utils/theme";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";



const DropdownInput = ({ data, label, placeholder, value, onChange, style, secureTextEntry, rightIcon, onIconPress, ...restProps }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            style={[styles.container, style]}
        >
            <Text style={[FontStyles.small_medium, styles.label]}>{label}</Text>
            <View style={[styles.outerContainer, isFocused && styles.outerContainerFocused]}>
                <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder={placeholder || "Select item"}
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                            onChange(item.value)
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
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
        // flexDirection: "row",
        // alignItems: "center"
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
    },


    dropdown: {
        // margin: 16,
        height: 48,
        borderBottomColor: 'gray',
        borderBottomWidth: 0,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        ...FontStyles.small_medium,
        color: Colors.icon_grey
    },
    selectedTextStyle: {
        ...FontStyles.small_medium,
    },
    iconStyle: {
        width: 20,
        height: 20,
    }
});


export default DropdownInput;