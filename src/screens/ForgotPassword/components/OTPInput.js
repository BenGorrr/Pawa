import React, { useRef, useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors, FontStyles } from "../../../utils/theme";

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();

    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

    const handleOnPress = () => {
        setIsInputBoxFocused(true);
        inputRef.current.focus();
    };

    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    useEffect(() => {
        // update pin ready status
        setIsPinReady(code.length === maximumLength);
        // clean up function
        return () => {
            setIsPinReady(false);
        };
    }, [code]);

    useEffect(() => {
        handleOnPress();
    }, [])

    const boxDigit = (_, index) => {
        const emptyInput = "";
        const digit = code[index] || emptyInput;

        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

        return (
            <View key={index} style={[styles.SplitBoxesOuter, isInputBoxFocused && isValueFocused && {
                borderColor: Colors.secondary
            }]}>
                <View style={[styles.SplitBoxes, isInputBoxFocused && isValueFocused && styles.SplitBoxesFocused]}>
                    <Text style={FontStyles.h5}>{digit}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.OTPInputContainer}>
            <Pressable onPress={handleOnPress} style={styles.SplitOTPBoxesContainer}>
                {boxArray.map(boxDigit)}
            </Pressable>
            <TextInput
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={handleOnBlur}
                keyboardType="number-pad"
                style={styles.TextInputHidden}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    OTPInputContainer: {
        justifyContent: "center",
        alignContent: "space-between"
    },
    TextInputHidden: {
        position: "absolute",
        opacity: 0,
    },
    SplitOTPBoxesContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    SplitBoxes: {
        borderRadius: 15,
        borderColor: Colors.border_grey,
        padding: 12,
        minWidth: 60,
        minHeight: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    SplitBoxesFocused: {
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    SplitBoxesOuter: {
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Colors.border_grey,
    }
});

export default OTPInput;
