import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WeatherIcon from "../WeatherIcon";

import { DayItemType } from "../../types/weathersTypes";

export default function DayItem({ date, weather, temp }: DayItemType) {
	return (
		<View style={styles.wrapper}>
			<View style={styles.iconWrapper}>
				<WeatherIcon icon={weather[0].icon}/>
			</View>

			<View style={styles.textDataWrapper}>
				<Text style={styles.textData}>{weather[0].main}</Text>
				<Text style={styles.textData}>{date.split(" ")[0]}</Text>
				<Text style={styles.textData}>{Math.round(temp)} °C</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		height: 62,
		padding: 10,
		backgroundColor: "white",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		shadowColor: "#000000",
		borderRadius: 15,
		shadowOffset: {
			width: 0,
			height: 5
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 1,
		marginBottom: 5
	},
	textData: {
		color: "#000000"
	},
	iconWrapper: {
		width: "20%"
	},
	textDataWrapper: {
		width: "70%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	}
});
