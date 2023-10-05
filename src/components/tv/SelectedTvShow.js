import { useParams } from 'react-router-dom';
import SideBar from "../SideBar";
import { addSecondaryTvShowVideoTrailer, addSecondaryTvShowVideoDetails } from "../../store/tvSlice";
import TvShowTrailer from './TvShowTrailer';
import TvShowTitle from './TvShowTitle';


const SelectedTvShow = () => {
    
    const {param} = useParams()
    if(!param) return(null);

    return(
        <div >
            <SideBar showMovies={true} ShowTv={true}/>
            <TvShowTrailer message={"SecondaryVideo"} action={addSecondaryTvShowVideoTrailer} tvShowId = {param} />
            <TvShowTitle message={"SecondaryVideo"} action={addSecondaryTvShowVideoDetails} tvShowId = {param} />
        </div>
    )
}

export default SelectedTvShow;