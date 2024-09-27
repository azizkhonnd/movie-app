import { configureStore } from '@reduxjs/toolkit';
import tvShowReducer from '../../redux/slices/tvShowSlice';

export const store = configureStore({
  reducer: {
    tvShows: tvShowReducer,
  },
});

export default store;
