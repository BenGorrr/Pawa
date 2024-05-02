import moment from 'moment';
import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import { NOTIFICATIONS_DATA } from '../../DATA/Dashboard/dummy_data';
import AppBar from '../../components/AppBar';
import { Colors, FontStyles } from '../../utils/theme';
import { NotificationItem } from './components/NotificationItem';

export const Notifications = ({ navigation, route }) => {

    const data = transformData(NOTIFICATIONS_DATA);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppBar back title={"Notifications"} />
            <View showsVerticalScrollIndicator={false} style={styles.container}>

                <SectionList
                    sections={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <NotificationItem item={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={[FontStyles.medium_medium, { backgroundColor: "white", color: Colors.text_grey, paddingBottom: 14 }]}>
                            {title}
                        </Text>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

const transformData = (data) => {
    // Create a dictionary to store section data
    const sections = {};

    // Iterate over the data to group items by date
    data.forEach(item => {
        const { date, time, title, message } = item;
        const today = moment();
        const itemDate = moment(date, "DD-MM-YYYY");
        let formattedDate = itemDate.format("DD-MM-YYYY");

        if (itemDate.isSame(today, 'day')) {
            formattedDate = "Today";
        } else if (itemDate.isSame(today.clone().subtract(1, 'days'), 'day')) {
            formattedDate = "Yesterday";
        }

        if (!sections[formattedDate]) {
            sections[formattedDate] = [];
        }

        sections[formattedDate].push({ time, title, message });
    });

    // Transform dictionary to array of sections
    const transformedData = Object.keys(sections).map(date => ({
        title: date,
        data: sections[date],
    }));
    console.log(transformedData)
    return transformedData;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: "6%",
        paddingTop: 24
    },
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
