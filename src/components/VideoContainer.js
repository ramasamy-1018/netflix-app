import {useSelector} from "react-redux"
import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";

const VideoContainer = () => {
    
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
    if(!nowPlayingMovies) return(null);

    return(
        <div >
            <VideoTrailer movieId = {nowPlayingMovies[2]?.id} />
            <VideoTitle movieId = {nowPlayingMovies[2]?.id} />
        </div>
    )
}

export default VideoContainer;