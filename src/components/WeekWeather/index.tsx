import React, { useEffect, useCallback } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "react-native-snackbar";

import DayItem from "../DayItem";
import PrimaryCondition from "../PrimaryCondition";
import CurrentDayItem from "../CurrentDayItem";
import LargeLoading from "../loaders/LargeLoading";

import { StateType } from "../../types/sagaTypes";
import { DayItemType, WeatherPoint } from "../../types/weathersTypes";

import { oneTime } from "../../consts/requestConsts";


export default function WeekWeather() {
	const dispatch = useDispatch();
	const state = useSelector((state: StateType) => state);
	const { weatherFor5Day, weatherFor5DayError } = state;

	useEffect(() => {
		dispatch({ type: "GET_WEATHER_DATA" });
	}, []);

	const renderWeek = useCallback(() => {
		const currentWeek: DayItemType[]  = [];

		if (weatherFor5Day) {
			weatherFor5Day?.list.forEach((it: WeatherPoint) => {
				if (it.dt_txt.includes(oneTime)) {
					currentWeek.push({
						date: it.dt_txt,
						weather: it.weather,
						temp: it.main.temp
					});
				} else {
					return null;
				}
			});

			return currentWeek.map(it => <DayItem key={it.date} {...it}/>);
		}
	}, [weatherFor5Day]);

	if (weatherFor5DayError) {
		Snackbar.show({
			text: "Something went wrong :(",
			duration: Snackbar.LENGTH_LONG,
		});

		return <LargeLoading/>;
	}

	if (!weatherFor5Day) {
		return <LargeLoading/>;
	}

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>
				WEATHER IN {weatherFor5Day?.city.name.toUpperCase()} FOR NEXT 5 DAYS
			</Text>

			<PrimaryCondition/>

			<ScrollView>
				<CurrentDayItem/>

				{renderWeek()}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		height: "55%",
		padding: 10
	},
	title: {
		fontSize: 18,
		color: "#000000",
		marginBottom: 10,
		fontWeight: "bold",
	},
	subTitle: {
		color: "#000000",
	}
});
