import React from "react";
import { Calendar as CalendarComponent } from "react-native-calendars";
import type { DateData } from "react-native-calendars";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import Snackbar from "react-native-snackbar";
import moment from "moment";

import { routes } from "../../routes";

import { RootStackParamList } from "../../types/weathersTypes";
import { StateType } from "../../types/sagaTypes";

export default function Calendar() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const state = useSelector((state: StateType) => state);
	const { weatherFor5Day } = state;
	const currentDate = moment().format("YYYY-MM-DD");

	const onDayPress = (day: DateData) => {
		if (weatherFor5Day) {
			if (
				day.dateString !== currentDate
				&& !weatherFor5Day?.list.find((it) => it.dt_txt.split(" ")[0] === day.dateString)
			) {
				Snackbar.show({
					text: "Sorry we don`t have data for this day.",
					duration: Snackbar.LENGTH_LONG,
				});
			} else {
				navigation.navigate(
					routes.detail,
					{ date: day.dateString }
				);
			}
		} else {
			Snackbar.show({
				text: "Please wait.",
				duration: Snackbar.LENGTH_LONG,
			});
		}
	};

	return (
		<View style={styles.wrapper}>
			<CalendarComponent onDayPress={day => onDayPress(day)}/>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		height: "45%"
	}
});

