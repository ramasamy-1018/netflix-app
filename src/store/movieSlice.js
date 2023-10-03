import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    allVideos: null,
    mainVideoTrailer: null,
    mainVideoDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addAllVideos: (state, action) => {
      state.allVideos = action.payload;
    },

    addMainVideoTrailer: (state, action) => {
      state.mainVideoTrailer = action.payload;
    },

    addMainVideoDetails: (state, action) => {
      state.mainVideoDetails = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addMainVideoTrailer,
  addAllVideos,
  addMainVideoDetails,
} = movieSlice.actions;
export default movieSlice.reducer;
