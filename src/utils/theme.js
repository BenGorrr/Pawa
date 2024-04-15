import { StyleSheet } from "react-native";

const Colors = {
    primary: '#FF407D',
    primary_disabled: '#FFC4D7',
    secondary: '#FFECF2',
    // secondary: '#1B3C73',
    white: '#FFF',
    black: '#0D0D12', // 900
    text_grey: '#666D80', // 500
    icon_grey: '#A4ACB9', // 300
    border_grey: '#DFE1E7', // 100

};

const FontFamily = {
    regular: 'InterTight_400Regular',
    medium: 'InterTight_500Medium',
    semiBold: 'InterTight_600SemiBold',
    bold: 'InterTight_700Bold'
};

const FontSize = {
    XSmall: 12,
    small: 14,
    medium: 16,
    large: 18
};

const FontStyles = StyleSheet.create({
    XSmall_regular: {
        fontFamily: FontFamily.regular,
        fontSize: FontSize.XSmall
    },
    XSmall_medium: {
        fontFamily: FontFamily.medium,
        fontSize: FontSize.XSmall
    },
    XSmall_semibold: {
        fontFamily: FontFamily.semiBold,
        fontSize: FontSize.XSmall
    },
    small_regular: {
        fontFamily: FontFamily.regular,
        fontSize: FontSize.small
    },
    small_medium: {
        fontFamily: FontFamily.medium,
        fontSize: FontSize.small
    },
    small_semibold: {
        fontFamily: FontFamily.semiBold,
        fontSize: FontSize.small
    },
    medium_regular: {
        fontFamily: FontFamily.regular,
        fontSize: FontSize.regular
    },
    medium_medium: {
        fontFamily: FontFamily.medium,
        fontSize: FontSize.regular
    },
    medium_semibold: {
        fontFamily: FontFamily.semiBold,
        fontSize: FontSize.regular
    },
    large_regular: {
        fontFamily: FontFamily.regular,
        fontSize: FontSize.large
    },
    large_medium: {
        fontFamily: FontFamily.medium,
        fontSize: FontSize.large
    },
    large_semibold: {
        fontFamily: FontFamily.semiBold,
        fontSize: FontSize.large
    },
    h6: {
        fontFamily: FontFamily.semiBold,
        fontSize: 18
    },
    h5: {
        fontFamily: FontFamily.semiBold,
        fontSize: 20
    },
    h4: {
        fontFamily: FontFamily.semiBold,
        fontSize: 24
    },
    h3: {
        fontFamily: FontFamily.semiBold,
        fontSize: 32
    },
    h2: {
        fontFamily: FontFamily.semiBold,
        fontSize: 40
    },
    h1: {
        fontFamily: FontFamily.semiBold,
        fontSize: 48
    },
});

const DefaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export { Colors, FontStyles, FontFamily, DefaultStyles };