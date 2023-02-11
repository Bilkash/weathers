import type {DateData} from 'react-native-calendars';

export type StateType = {
  day: DateData | null,
  weatherFor5Day: any,
  weatherFor5DayError: string | null
}
