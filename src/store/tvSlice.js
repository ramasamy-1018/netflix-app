import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    topRatedTvShows: null,
    englishTvShows: null,
    tamilTvShows: null,
    teluguTvShows: null,
    hindiTvShows: null,
    malayalamTvShows: null,
    kannadaTvShows: null,
    mainTvShowVideoTrailer: null,
    mainTvShowVideoDetails: null,
    secondaryTvShowVideoTrailer: null,
    secondaryTvShowVideoDetails: null,
    tvShowSeasonDetails: null,
    tvShowCastDetails: null,
    showCastDetails: true
  },
  reducers: {

    addTopRatedTvShows: (state, action) => {
      state.topRatedTvShows = action.payload;
    },

    addEnglishTvShows: (state, action) => {
      state.englishTvShows = action.payload;
    },

    addTamilTvShows: (state, action) => {
      state.tamilTvShows = action.payload;
    },

    addTeluguTvShows: (state, action) => {
      state.teluguTvShows = action.payload;
    },

    addMalayalamTvShows: (state, action) => {
      state.malayalamTvShows = action.payload;
    },

    addHindiTvShows: (state, action) => {
      state.hindiTvShows = action.payload;
    },

    addKannadaTvShows: (state, action) => {
      state.kannadaTvShows = action.payload;
    },

    addMainTvShowVideoTrailer: (state, action) => {
      state.mainTvShowVideoTrailer = action.payload;
    },

    addMainTvShowVideoDetails: (state, action) => {
      state.mainTvShowVideoDetails = action.payload;
    },

    addSecondaryTvShowVideoTrailer: (state, action) => {
      state.secondaryTvShowVideoTrailer = action.payload;
    },

    addSecondaryTvShowVideoDetails: (state, action) => {
      state.secondaryTvShowVideoDetails = action.payload;
    },

    removeSecondaryTvShowVideoTrailer: (state) => {
      state.secondaryTvShowVideoTrailer = null;
    },

    removeSecondaryTvShowVideoDetails: (state) => {
      state.secondaryTvShowVideoDetails = null;
    },

    addTvShowSeasonDetails: (state, action) => {
      state.tvShowSeasonDetails = action.payload;
    },

    removeTvShowSeasonDetails: (state) => {
      state.tvShowSeasonDetails = null;
    },

    addTvShowCastDetails: (state, action) => {
      state.tvShowCastDetails = action.payload;
    },

    removeTvShowCastDetails: (state) => {
      state.tvShowCastDetails = null;
    },

    ShowCastDetails: (state, action) => {
      state.showCastDetails = action.payload;
    },
  },
});

export const {
  addTopRatedTvShows,
  addEnglishTvShows,
  addHindiTvShows,
  addKannadaTvShows,
  addTamilTvShows,
  addTeluguTvShows,
  addMalayalamTvShows,
  addMainTvShowVideoTrailer,
  addMainTvShowVideoDetails,
  addSecondaryTvShowVideoTrailer,
  addSecondaryTvShowVideoDetails,
  removeSecondaryTvShowVideoTrailer,
  removeSecondaryTvShowVideoDetails,
  addTvShowSeasonDetails,
  removeTvShowSeasonDetails,
  addTvShowCastDetails,
  removeTvShowCastDetails,
  ShowCastDetails  
} = tvSlice.actions;
export default tvSlice.reducer;
