import {useSelector} from "react-redux"
import MovieTrailer from "./MovieTrailer";
import { addMainMovieVideoTrailer } from "../../store/movieSlice";

const MovieTrailerContainer = () => {
    
    const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies)
    if(!nowPlayingMovies) return(null);

    return(
        <div >
            <MovieTrailer message={"MainVideo"} action = {addMainMovieVideoTrailer} movieId = {nowPlayingMovies[0]?.id} />
        </div>
    )
}

export default MovieTrailerContainer;