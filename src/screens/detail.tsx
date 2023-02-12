import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { oneTime } from "../consts/requestConsts";
import moment from "moment";
import { useSelector } from "react-redux";
// @ts-ignore
import { API_KEY, BASE_URL } from "@env";

import WeatherIcon from "../components/WeatherIcon";

import { StateType } from "../types/sagaTypes";

type DetailScreenType = {
	route: {
		key: string,
		name: string,
		params: any,
		path: any
	}
};

export default function DetailScreen(
	{ route }: DetailScreenType
) {
	const navigation = useNavigation();
	const state = useSelector((state: StateType) => state);
	const { currentWeather, weatherFor5Day } = state;
	const { params: { date } } = route;
	const detailWeather = date === moment().format("YYYY-MM-DD")
		? currentWeather
		: weatherFor5Day?.list
			.find((it) => it.dt_txt === `${date} ${oneTime}` );

	useEffect(() => {
		navigation.setOptions({
			title: `Weather for ${date}`
		});
	}, []);

	return (
		<View style={styles.wrapper}>
			<View style={styles.topWrapper}>
				<View style={styles.topContainer}>
					<WeatherIcon icon={detailWeather?.weather[0].icon ?? ""}/>
				</View>

				<View style={styles.topContainer}>
					<Text style={styles.textData}>
						Temperature: {detailWeather?.main?.temp ? Math.round(detailWeather?.main.temp) : "no data"} °C
					</Text>

					<Text style={styles.textData}>
						Feels like: {detailWeather?.main?.feels_like ? Math.round(detailWeather?.main.feels_like ) : "no data"} °C
					</Text>

					<Text style={styles.textData}>
						Humidity: {detailWeather?.main.humidity}%
					</Text>
				</View>
			</View>

			<View style={styles.bottomWrapper}>
				<View>
					<Text style={styles.textData}>
						Clouds: {detailWeather?.clouds.all}%
					</Text>

					<Text style={styles.textData}>
						Temperature Max: {detailWeather?.main.temp_max} °C
					</Text>

					<Text style={styles.textData}>
						Temperature Min: {detailWeather?.main.temp_min} °C
					</Text>


					<Text style={styles.textData}>
						Pressure: {detailWeather?.main.pressure} hPa
					</Text>

					<Text style={styles.textData}>
						Description: {detailWeather?.weather[0].main}-{detailWeather?.weather[0].description}
					</Text>
				</View>

				<View style={styles.content}>
					<Text style={styles.textData}>
						Wind:
					</Text>

					<Text style={styles.textData}>
						Deg: {detailWeather?.wind.deg}°
					</Text>

					<Text style={styles.textData}>
						Gust: {detailWeather?.wind.gust} meter/sec
					</Text>

					<Text style={styles.textData}>
						Speed: {detailWeather?.wind.speed} meter/sec
					</Text>
				</View>

				<View style={styles.content}>
					<Text style={styles.smallTextData}>
						The maximum value of the visibility is 10km: {detailWeather?.visibility}m
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		height: "100%"
	},
	topWrapper: {
		height: "20%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	textData: {
		color: "#000000",
		fontSize: 20
	},
	smallTextData: {
		color: "#000000",
		fontSize: 14
	},
	topContainer: {
		width: "50%"
	},
	bottomWrapper: {
		height: "80%",
		padding: 15
	},
	content: {
		marginTop: 20,
		marginBottom: 20,
	}
});
