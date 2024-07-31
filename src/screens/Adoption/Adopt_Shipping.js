import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import DropdownInput from '../../components/DropdownInput';
import { PaymentModal } from './components/PaymentModal';


export const Adopt_Shipping = ({ navigation, route }) => {
    const pet = route.params.pet;
    const [delivery, setDelivery] = useState("");
    const [paymentMethod, setPaymentMethod] = useState();
    const [paymentModalVisible, setPaymentModalVisible] = useState(false);

    const onNext = () => {
        setPaymentModalVisible(true);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppBar back title={"Shipping"} menu />
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Input placeholder={"Name"} label={"Full Name"} style={{ marginBottom: 16 }} />

                    <Input placeholder={"Phone Number"} label={"Phone Number"} style={{ marginBottom: 16 }} />
                    <Input placeholder={"City/Province"} label={"City/Province"} style={{ marginBottom: 16 }} />
                    <Input placeholder={"Write down the full address to minimize errors in delivery"} label={"Detail Location"} style={{ marginBottom: 16 }}
                        height={100} multiline
                    />
                </View>
                <Button title={"Continue"} onPress={onNext} />

            </View>
            <PaymentModal
                isVisible={paymentModalVisible}
                onClose={() => setPaymentModalVisible(false)}
                value={paymentMethod}
                onSelect={(item) => { setPaymentMethod(item) }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: "6%",
        paddingTop: 24
    }
});
