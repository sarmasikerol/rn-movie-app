import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getMovieCredits,
  getMovieCreditsPerson,
  getMovieDetails,
  getPersonDetails,
  getSearchMovies,
  getSimilarMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from '../../api';
import {
  setMovieCreditState,
  setMovieDetailState,
  setPersonDetailState,
  setPersonMovieCreditsState,
  setSearchResultsState,
  setSimilarMoviesState,
  setTopRatedState,
  setTrendingState,
  setUpcomingState,
} from '../slices/movieSlice';

export const GetTrendingMovies = createAsyncThunk(
  'movie/getTrendingMovies',
  async (_, {dispatch}) => {
    const response = await getTrendingMovies();
    dispatch(setTrendingState(response.results));
  },
);

export const GetUpcomingMovies = createAsyncThunk(
  'movie/getUpcomingMovies',
  async (_, {dispatch}) => {
    const response = await getUpcomingMovies();
    dispatch(setUpcomingState(response.results));
  },
);

export const GetTopRatedMovies = createAsyncThunk(
  'movie/getTopRatedMovies',
  async (_, {dispatch}) => {
    const response = await getTopRatedMovies();
    dispatch(setTopRatedState(response.results));
  },
);

export const GetMovieDetails = createAsyncThunk(
  'movie/getMovieDetails',
  async (id, {dispatch}) => {
    const response = await getMovieDetails(id);
    dispatch(setMovieDetailState(response));
  },
);
export const GetMovieCredits = createAsyncThunk(
  'movie/getMovieCredits',
  async (id, {dispatch}) => {
    const response = await getMovieCredits(id);
    dispatch(setMovieCreditState(response.cast));
  },
);
export const GetSimilarMoviesState = createAsyncThunk(
  'movie/getSimilarMovies',
  async (id, {dispatch}) => {
    const response = await getSimilarMovies(id);
    dispatch(setSimilarMoviesState(response.results));
  },
);

export const GetPersonDetails = createAsyncThunk(
  'movie/getPersonDetails',
  async (id, {dispatch}) => {
    const response = await getPersonDetails(id);
    dispatch(setPersonDetailState(response));
  },
);

export const GetMovieCreditsPerson = createAsyncThunk(
  'movie/getMovieCreditsPerson',
  async (id, {dispatch}) => {
    const response = await getMovieCreditsPerson(id);
    dispatch(setPersonMovieCreditsState(response.cast));
  },
);

export const GetSearchMovies = createAsyncThunk(
  'movie/getSearchMovies',
  async (id, {dispatch}) => {
    const response = await getSearchMovies(id);

    dispatch(setSearchResultsState(response.results));
  },
);