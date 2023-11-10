import {useSelector} from "react-redux"
import TvShowTrailer from "./TvShowTrailer";
import { addMainTvShowVideoTrailer } from "../../store/tvSlice";
import Shimmer from "../../utils/Shimmer";

const TvShowTrailerContainer = () => {
    
    const topRatedTvShows = useSelector((store) => store.tv.topRatedTvShows)
    if(!topRatedTvShows) return(<Shimmer />);

    return(
        <div >
            <TvShowTrailer message={"MainVideo"} action = {addMainTvShowVideoTrailer} tvShowId = {topRatedTvShows[0]?.id} />
        </div>
    )
}

export default TvShowTrailerContainer;