import {useSelector} from "react-redux"
import MovieTrailer from "./MovieTrailer";
import MovieTitle from "./MovieTitle";
import { addMainMovieVideoDetails, addMainMovieVideoTrailer } from "../../store/movieSlice";

const MovieTrailerContainer = () => {
    
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
    if(!nowPlayingMovies) return(null);

    return(
        <div >
            <MovieTrailer message={"MainVideo"} action = {addMainMovieVideoTrailer} movieId = {nowPlayingMovies[0]?.id} />
            <MovieTitle message={"MainVideo"} action = {addMainMovieVideoDetails} movieId = {nowPlayingMovies[0]?.id} />
        </div>
    )
}

export default MovieTrailerContainer;