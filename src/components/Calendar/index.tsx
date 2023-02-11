import React, { useCallback, useState } from 'react';
import {Calendar as CalendarComponent} from 'react-native-calendars'
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import type {DateData} from 'react-native-calendars';
import {StyleSheet, View } from 'react-native';

export default function Calendar() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<DateData | null>(null)
  const data = useSelector(state => state);

  const onDayPress = useCallback((day: DateData) => {
    setSelected(day);
    dispatch({ type: 'SET_DAY', payload: day });
  }, []);

  return (
    <View style={styles.wrapper}>
      <CalendarComponent onDayPress={day => onDayPress(day)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: '50%'
  }
});

