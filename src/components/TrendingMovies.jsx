import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetTrendingMovies } from '../app/actions/movieAction';

export default function TrendingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    GetTrendingMovies();
  }, [dispatch]);
  return (
    <View>
      <Text></Text>
    </View>
  )
}