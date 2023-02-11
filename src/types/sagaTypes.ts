import type { DateData } from "react-native-calendars";
import { Weather5DayType } from "./weathersTypes";

export type StateType = {
  day: DateData | null,
  weatherFor5Day: Weather5DayType | null,
  weatherFor5DayError: string | null
}
