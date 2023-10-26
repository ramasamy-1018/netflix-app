import {useSelector} from "react-redux"
import MovieTrailer from "./MovieTrailer";
import { addMainMovieVideoTrailer } from "../../store/movieSlice";
import Shimmer from "../../utils/Shimmer";

const MovieTrailerContainer = () => {
    
    const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies)
    if(!nowPlayingMovies) return((<Shimmer />));

    return(
        <div >
            <MovieTrailer message={"MainVideo"} action = {addMainMovieVideoTrailer} movieId = {nowPlayingMovies[19]?.id} />
        </div>
    )
}

export default MovieTrailerContainer;