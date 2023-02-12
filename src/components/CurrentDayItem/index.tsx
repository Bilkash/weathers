import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import Snackbar from "react-native-snackbar";

import WeatherIcon from "../WeatherIcon";
import SmallLoading from "../loaders/SmallLoading/indes";

import { routes } from "../../routes";

import { RootStackParamList } from "../../types/weathersTypes";
import { StateType } from "../../types/sagaTypes";

export default function CurrentDayItem() {
	const dispatch = useDispatch();
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const state = useSelector((state: StateType) => state);
	const { currentWeather, currentWeatherError } = state;
	const date = moment().format("YYYY-MM-DD");

	useEffect(() => {
		dispatch({ type: "GET_CURRENT_WEATHER_DATA" });
	}, []);

	if (currentWeatherError) {
		Snackbar.show({
			text: "Something went wrong :(",
			duration: Snackbar.LENGTH_LONG,
		});

		return <SmallLoading/>;
	}

	if (currentWeather) {
		const { weather, main: { temp } } = currentWeather;

		return (
			<TouchableOpacity
				onPress={
					() => navigation.navigate(
						routes.detail,
						{ date: date }
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
								{moment(date).format("dddd")}
							</Text>
						</View>
						<View>
							<Text style={styles.textData}>
								{date}
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
	} else {
		return <SmallLoading/>;
	}
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
