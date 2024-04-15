import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
	useFonts,
	InterTight_100Thin,
	InterTight_200ExtraLight,
	InterTight_300Light,
	InterTight_400Regular,
	InterTight_500Medium,
	InterTight_600SemiBold,
	InterTight_700Bold,
	InterTight_800ExtraBold,
	InterTight_900Black,
	InterTight_100Thin_Italic,
	InterTight_200ExtraLight_Italic,
	InterTight_300Light_Italic,
	InterTight_400Regular_Italic,
	InterTight_500Medium_Italic,
	InterTight_600SemiBold_Italic,
	InterTight_700Bold_Italic,
	InterTight_800ExtraBold_Italic,
	InterTight_900Black_Italic,
} from '@expo-google-fonts/inter-tight';
import { FontStyles } from './src/utils/theme';
import ApplicationNavigator from './src/navigation/Application';

export default function App() {
	let [fontsLoaded] = useFonts({
		InterTight_100Thin,
		InterTight_200ExtraLight,
		InterTight_300Light,
		InterTight_400Regular,
		InterTight_500Medium,
		InterTight_600SemiBold,
		InterTight_700Bold,
		InterTight_800ExtraBold,
		InterTight_900Black,
		InterTight_100Thin_Italic,
		InterTight_200ExtraLight_Italic,
		InterTight_300Light_Italic,
		InterTight_400Regular_Italic,
		InterTight_500Medium_Italic,
		InterTight_600SemiBold_Italic,
		InterTight_700Bold_Italic,
		InterTight_800ExtraBold_Italic,
		InterTight_900Black_Italic,
	});

	return (
		<View style={styles.container}>
			<ApplicationNavigator />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
});
