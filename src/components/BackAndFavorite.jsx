import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../app/slices/favoriteSlice';

export default function BackAndFavorite({isAbsolute, movie}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };
  return (
    <SafeAreaView
      className={`flex-row justify-between items-center mx-4 z-20 ${
        isAbsolute && 'absolute w-[360px]'
      }`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-[#eab308] p-1 rounded-xl">
        <Icon name="chevron-left" color="#fff" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFavorite}>
        <Icon name="heart" color={isFavorite ? 'red' : '#fff'} size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
