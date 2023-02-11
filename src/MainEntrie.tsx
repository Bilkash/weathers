import React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import Calendar from './components/Calendar';
import WeekWeather from './components/WeekWeather';

export default function MainEntrie() {
  const dispatch = useDispatch()
  const state = useSelector(state => state);

  const handleGetWeather = () => {
    dispatch({type: "GET_WEATHER"})
  }

  return (
    <View>
      <WeekWeather/>

      {/*<Button title={"GET_WEATHER"} onPress={handleGetWeather}/>*/}

      {/*<Button*/}
      {/*  title={"CLEAR DAY"}*/}
      {/*  onPress={() => dispatch({type: 'CLEAR_DAY'})}*/}
      {/*  color={'red'}*/}
      {/*/>*/}

      <Calendar/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
  }
});
