import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function LargeLoading() {
	return (
		<View style={styles.loadingWrapper}>
			<ActivityIndicator size={"large"}/>
		</View>
	);
}

const styles = StyleSheet.create({
	loadingWrapper: {
		height: "55%",
		padding: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
});
