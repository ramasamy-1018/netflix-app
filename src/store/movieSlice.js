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
    secondaryVideoTrailer: null,
    secondaryVideoDetails: null,
    tamilMovies: null,
    teluguMovies: null,
    hindiMovies: null,
    malayalamMovies: null,
    kannadaMovies: null,
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

    addAllVideos: (state, action) => {
      state.allVideos = action.payload;
    },

    addMainVideoTrailer: (state, action) => {
      state.mainVideoTrailer = action.payload;
    },

    addMainVideoDetails: (state, action) => {
      state.mainVideoDetails = action.payload;
    },

    addSecondaryVideoTrailer: (state, action) => {
      state.secondaryVideoTrailer = action.payload;
    },

    addSecondaryVideoDetails: (state, action) => {
      state.secondaryVideoDetails = action.payload;
    },

    removeSecondaryVideoTrailer: (state, action) => {
      state.secondaryVideoTrailer = null;
    },

    removeSecondaryVideoDetails: (state, action) => {
      state.secondaryVideoDetails = null;
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
  addHindiMovies,
  addKannadaMovies,
  addTamilMovies,
  addTeluguMovies,
  addMalayalamMovies,
  addSecondaryVideoTrailer,
  addSecondaryVideoDetails,
  removeSecondaryVideoTrailer,
  removeSecondaryVideoDetails,  
} = movieSlice.actions;
export default movieSlice.reducer;
