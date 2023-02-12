import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function SmallLoading() {
	return (
		<View style={[styles.wrapper, styles.loadingWrapper]}>
			<ActivityIndicator/>
		</View>
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
	loadingWrapper: {
		justifyContent: "center",
	},
});
