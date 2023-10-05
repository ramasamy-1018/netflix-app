import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    tamilMovies: null,
    teluguMovies: null,
    hindiMovies: null,
    malayalamMovies: null,
    kannadaMovies: null,
    mainMovieVideoTrailer: null,
    mainMovieVideoDetails: null,
    secondaryMovieVideoTrailer: null,
    secondaryMovieVideoDetails: null,
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

    addTamilMovies: (state, action) => {
      state.tamilMovies = action.payload;
    },

    addTeluguMovies: (state, action) => {
      state.teluguMovies = action.payload;
    },

    addMalayalamMovies: (state, action) => {
      state.malayalamMovies = action.payload;
    },

    addHindiMovies: (state, action) => {
      state.hindiMovies = action.payload;
    },

    addKannadaMovies: (state, action) => {
      state.kannadaMovies = action.payload;
    },

    addMainMovieVideoTrailer: (state, action) => {
      state.mainMovieVideoTrailer = action.payload;
    },

    addMainMovieVideoDetails: (state, action) => {
      state.mainMovieVideoDetails = action.payload;
    },

    addSecondaryMovieVideoTrailer: (state, action) => {
      state.secondaryMovieVideoTrailer = action.payload;
    },

    addSecondaryMovieVideoDetails: (state, action) => {
      state.secondaryMovieVideoDetails = action.payload;
    },

    removeSecondaryMovieVideoTrailer: (state, action) => {
      state.secondaryMovieVideoTrailer = null;
    },

    removeSecondaryMovieVideoDetails: (state, action) => {
      state.secondaryMovieVideoDetails = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addHindiMovies,
  addKannadaMovies,
  addTamilMovies,
  addTeluguMovies,
  addMalayalamMovies,
  addMainMovieVideoTrailer,
  addMainMovieVideoDetails,
  addSecondaryMovieVideoTrailer,
  addSecondaryMovieVideoDetails,
  removeSecondaryMovieVideoTrailer,
  removeSecondaryMovieVideoDetails,  
} = movieSlice.actions;
export default movieSlice.reducer;
