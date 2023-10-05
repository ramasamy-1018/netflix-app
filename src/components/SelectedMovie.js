import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";
import { useParams } from 'react-router-dom';
import SideBar from "./SideBar";
import { addSecondaryVideoDetails, addSecondaryVideoTrailer } from "../store/movieSlice";


const SelectedMovie = () => {
    
    const {param} = useParams()
    if(!param) return(null);

    return(
        <div >
            <SideBar showMovies={true} ShowTv={true}/>
            <VideoTrailer message={"SecondaryVideo"} action={addSecondaryVideoTrailer} movieId = {param} />
            <VideoTitle message={"SecondaryVideo"} action={addSecondaryVideoDetails} movieId = {param} />
        </div>
    )
}

export default SelectedMovie;