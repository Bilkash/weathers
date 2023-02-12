import React from "react";
import { View } from "react-native";

import WeekWeather from "../components/WeekWeather";
import Calendar from "../components/Calendar";

export default function MainScreen() {
	return (
		<View>
			<WeekWeather/>

			<Calendar/>
		</View>
	);
}
