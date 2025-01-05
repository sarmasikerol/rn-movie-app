import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppScreens} from './types';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AppScreens.Home}>
      <Stack.Screen name={AppScreens.Home} component={HomeScreen} />
      <Stack.Screen name={AppScreens.Movie} component={MovieScreen} />
      <Stack.Screen name={AppScreens.Person} component={PersonScreen} />
      <Stack.Screen name={AppScreens.Search} component={SearchScreen} />
    </Stack.Navigator>
  );
};
