import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import { StateType } from "../../types/sagaTypes";
import { DayItemType, WeatherPoint } from "../../types/weathersTypes";

import { oneTime } from "../../consts/requestConsts";

export default function PrimaryCondition() {
	const state = useSelector((state: StateType) => state);
	const { weatherFor5Day } = state;
	const currentWeek: DayItemType[]  = [];

	function twoMostRepeated(arr: DayItemType[]): string {
		const countMap = arr.reduce((acc, obj) => {
			const propValue = obj.weather[0].main;
			acc[propValue] = (acc[propValue] || 0) + 1;
			return acc;
		}, {} as { [key: string]: number });

		return Object.entries(countMap)
			.sort((a, b) => b[1] - a[1])
			.slice(0, 2)
			.map(([value]) => value)
			.join("-");
	}

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

		return <Text>Primary condition: {twoMostRepeated(currentWeek)}</Text>;
	} else {
		return null;
	}
}
