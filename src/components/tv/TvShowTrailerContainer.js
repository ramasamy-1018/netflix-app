import {useSelector} from "react-redux"
import TvShowTrailer from "./TvShowTrailer";
import TvShowTitle from "./TvShowTitle";
import { addMainTvShowVideoDetails, addMainTvShowVideoTrailer } from "../../store/tvSlice";

const TvShowTrailerContainer = () => {
    
    const topRatedTvShows = useSelector((store) => store.tv.topRatedTvShows)
    if(!topRatedTvShows) return(null);

    return(
        <div >
            <TvShowTrailer message={"MainVideo"} action = {addMainTvShowVideoTrailer} tvShowId = {topRatedTvShows[0]?.id} />
        </div>
    )
}

export default TvShowTrailerContainer;