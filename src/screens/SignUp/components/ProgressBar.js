import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../utils/theme";


const ProgressBar = ({ currentStep, totalStep }) => {

    return (
        <View
            style={styles.container}
        >
            <View style={{
                height: 4,
                backgroundColor: Colors.primary,
                flex: currentStep / totalStep
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row"
    }
});


export default ProgressBar;