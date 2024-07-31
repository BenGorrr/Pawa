import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import DropdownInput from '../../components/DropdownInput';
import { BottomModal } from '../../components/BottomModal';
import { PaymentModal } from './components/PaymentModal';


const DELIVERY_OPTIONS = [
    {
        label: "Shipped",
        value: "SHIPPED"
    },
    {
        label: "Face to Face",
        value: "F2F"
    }
]


export const Adopt_Info = ({ navigation, route }) => {
    const pet = route.params.pet;
    const [delivery, setDelivery] = useState("");
    const [paymentMethod, setPaymentMethod] = useState();
    const [paymentModalVisible, setPaymentModalVisible] = useState(false);

    const onNext = () => {
        if (delivery == "SHIPPED")
            navigation.navigate("Adopt_Shipping", { pet: pet })
        else if (delivery == "F2F")
            setPaymentModalVisible(true);

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppBar back title={"Adopt"} menu />
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Input placeholder={"Name"} label={"Full Name"} style={{ marginBottom: 16 }} />

                    <Input placeholder={"Phone Number"} label={"Phone Number"} style={{ marginBottom: 16 }} />
                    <DropdownInput data={DELIVERY_OPTIONS} label={"Delivery"} onChange={setDelivery} />
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
