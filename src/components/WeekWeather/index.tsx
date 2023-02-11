import React, { useEffect, useCallback, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import DayItem from "../DayItem";
import PrimaryCondition from "../PrimaryCondition";

import { oneTime } from "../../consts/requestConsts";

import { StateType } from "../../types/sagaTypes";
import { DayItemType, WeatherPoint } from "../../types/weathersTypes";


export default function WeekWeather() {
	const dispatch = useDispatch();
	const state = useSelector((state: StateType) => state);
	const { weatherFor5Day } = state;

	useEffect(() => {
		dispatch({ type: "GET_WEATHER" });
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

	if (!weatherFor5Day) {
		return (
			<View style={styles.loadingWrapper}>
				<ActivityIndicator size={"large"}/>
			</View>
		);
	}

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>
				WEATHER IN {weatherFor5Day?.city.name.toUpperCase()} FOR NEXT 5 DAYS
			</Text>

			<PrimaryCondition/>

			<View>
				{renderWeek()}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		height: "55%",
		padding: 10
	},
	loadingWrapper: {
		height: "55%",
		padding: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
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
