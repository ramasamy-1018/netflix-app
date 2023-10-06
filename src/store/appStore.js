import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "./movieSlice"
import tvReducer from "./tvSlice"
import watchlistReducer from "./watchlistSlice"

const appStore = configureStore({
    reducer:{
        movies: movieReducer,
        tv: tvReducer,
        watchlist: watchlistReducer
    }
})

export default appStore