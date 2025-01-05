//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetMovieCreditsPerson,
  GetPersonDetails,
} from '../app/actions/movieAction';
import {useRoute} from '@react-navigation/native';
import BackAndFavorite from '../components/BackAndFavorite';
import {
  getPersonDetailState,
  getPersonMovieCreditsState,
} from '../app/movieSelector';
import PersonCard from '../components/PersonCard';

// create a component
const PersonScreen = () => {
  const id = useRoute().params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPersonDetails(id));
    dispatch(GetMovieCreditsPerson(id));
  }, [id, dispatch]);

  const person = useSelector(getPersonDetailState());
  const personCredits = useSelector(getPersonMovieCreditsState());

  return (
    <ScrollView className="bg-neutral-900 flex-1">
      <BackAndFavorite />
      <PersonCard person={person} personMovies={personCredits}/>
    </ScrollView>
  );
};

//make this component available to the app
export default PersonScreen;
