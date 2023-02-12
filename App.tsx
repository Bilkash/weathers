import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import MainEntrie from "./src/MainEntrie";
import store from "./src/saga/store";

function App(): JSX.Element {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<MainEntrie/>
			</Provider>
		</NavigationContainer>
	);
}

export default App;
