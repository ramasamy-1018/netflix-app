import {useSelector} from "react-redux"
import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";
import { addMainVideoDetails, addMainVideoTrailer } from "../store/movieSlice";

const VideoContainer = () => {
    
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
    if(!nowPlayingMovies) return(null);

    return(
        <div >
            <VideoTrailer message={"MainVideo"} action = {addMainVideoTrailer} movieId = {nowPlayingMovies[0]?.id} />
            <VideoTitle message={"MainVideo"} action = {addMainVideoDetails} movieId = {nowPlayingMovies[0]?.id} />
        </div>
    )
}

export default VideoContainer;