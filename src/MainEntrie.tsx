import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/main";
import DetailScreen from "./screens/detail";

import { routes } from "./routes";

const Stack = createNativeStackNavigator();

export default function MainEntrie() {
	return (
		<>
			<Stack.Navigator initialRouteName={routes.main}>
				<Stack.Screen
					name={routes.main}
					component={MainScreen}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name={routes.detail}
					component={DetailScreen}
				/>
			</Stack.Navigator>
		</>
	);
}
