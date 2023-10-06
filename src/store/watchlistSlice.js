import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchlistArray: [],
  },
  reducers: {

    addToWatchlist: (state, action) => {
      state.watchlistArray.push(action.payload)
    },

    removeFromWatchList: (state, action) => {
      const modifiedArray = state.watchlistArray.filter((item) => item.id != action.payload)
      return {watchlistArray : modifiedArray};
    },
    
    clearWatchList: (state, action) => {
      return { watchlistArray: []}
    },
  }
    
});

export const {
    addToWatchlist,
    removeFromWatchList,
    clearWatchList,
  
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
