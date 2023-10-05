import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "./movieSlice"
import tvReducer from "./tvSlice"

const appStore = configureStore({
    reducer:{
        movies: movieReducer,
        tv: tvReducer
    }
})

export default appStore