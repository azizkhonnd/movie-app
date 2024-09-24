import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTvShows = createAsyncThunk(
  'tvShows/fetchTvShows',
  async () => {
    const response = await axios.get('https://api.tvmaze.com/shows?page=1');
    return response.data.slice(20, 52);
  }
);

export const fetchSingleShow = createAsyncThunk(
  'tvShows/fetchSingleShow',
  async (showId) => {
    const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
    return response.data;
  }
);

const getInitialLikedShows = () => {
  const storedLikes = localStorage.getItem('likedShows');
  return storedLikes ? JSON.parse(storedLikes) : [];
};

const tvShowSlice = createSlice({
  name: 'tvShows',
  initialState: {
    shows: [],
    likedShows: getInitialLikedShows(),
    selectedShow: null,
    loading: false,
    error: null,
  },
  reducers: {
    likeShow: (state, action) => {
      state.likedShows.push(action.payload);
      localStorage.setItem('likedShows', JSON.stringify(state.likedShows));
    },
    unlikeShow: (state, action) => {
      state.likedShows = state.likedShows.filter(
        (showId) => showId !== action.payload
      );
      localStorage.setItem('likedShows', JSON.stringify(state.likedShows));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.loading = false;
        state.shows = action.payload;
      })
      .addCase(fetchTvShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleShow.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleShow.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShow = action.payload;
      })
      .addCase(fetchSingleShow.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { likeShow, unlikeShow } = tvShowSlice.actions;

export default tvShowSlice.reducer;
