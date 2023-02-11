import React, {useEffect, useCallback} from 'react';
import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { StateType } from '../../types/sagaTypes';
import DayItem from '../DayItem';


export default function WeekWeather() {
  const dispatch = useDispatch();
  const state = useSelector((state: StateType) => state);
  const {weatherFor5Day} = state;
  const oneTime = '12:00:00'

  useEffect(() => {
    dispatch({type: "GET_WEATHER"})
  }, [])

  const renderWeek = useCallback(() => {
    if (weatherFor5Day) {
      const currentWeek: any[] = [];
        weatherFor5Day?.list.forEach((it: any) => {
          if (it.dt_txt.includes(oneTime)) {
            currentWeek.push({
              date: it.dt_txt,
              weather: it.weather,
              temp: it.main.temp
            })
        } else {
          return null;
        }
      })

      return currentWeek.map(it => <DayItem key={it.date} {...it}/>)
    }
  }, [weatherFor5Day])

  return (
    <View style={styles.wrapper}>
      <Text>WEATER % DAYS</Text>

      <View>
        {renderWeek()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: '50%',
    padding: 10
  }
});
