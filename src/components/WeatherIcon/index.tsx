import React from "react";
import { Text, View } from "react-native";

import Svg01 from "../../svg/01d.svg";
import Svg02 from "../../svg/02d.svg";
import Svg03 from "../../svg/03d.svg";
import Svg04 from "../../svg/04d.svg";
import Svg09 from "../../svg/09d.svg";
import Svg10 from "../../svg/10d.svg";
import Svg11 from "../../svg/11d.svg";
import Svg13 from "../../svg/13d.svg";
import Svg50 from "../../svg/50d.svg";

type WeatherIconType = {
	icon: string
}

export default function WeatherIcon({ icon }: WeatherIconType) {
	switch (icon) {
	case "01d": {
		return <View><Svg01/></View>;
	}
	case "02d":{
		return <View><Svg02/></View>;
	}
	case "03d":{
		return <View><Svg03/></View>;
	}
	case "04d":{
		return <View><Svg04/></View>;
	}
	case "09d":{
		return <View><Svg09/></View>;
	}
	case "10d":{
		return <View><Svg10/></View>;
	}
	case "11d":{
		return <View><Svg11/></View>;
	}
	case "13d":{
		return <View><Svg13/></View>;
	}
	case "50d":{
		return <View><Svg50/></View>;
	}
	default: {
		return <View><Text>No icon</Text></View>;
	}
	}
}

