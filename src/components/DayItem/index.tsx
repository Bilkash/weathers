import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import WeatherIcon from "../WeatherIcon";

import { DayItemType, RootStackParamList } from "../../types/weathersTypes";

import { routes } from "../../routes";

export default function DayItem({ date, weather, temp }: DayItemType) {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

	return (
		<TouchableOpacity
			onPress={
				() => navigation.navigate(
					routes.detail,
					{ date: date.split(" ")[0] }
				)
			}
		>
			<View style={styles.wrapper}>
				<View style={styles.iconWrapper}>
					<WeatherIcon icon={weather[0].icon}/>
				</View>

				<View style={styles.textDataWrapper}>
					<View>
						<Text style={styles.textData}>{weather[0].main}</Text>
						<Text style={styles.textData}>
							{moment(date.split(" ")[0]).format("dddd")}
						</Text>
					</View>
					<View>
						<Text style={styles.textData}>
							{date.split(" ")[0]}
						</Text>
					</View>
					<View>
						<Text style={styles.textData}>
							{Math.round(temp)} °C
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
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
		alignItems: "center",
	}
});
