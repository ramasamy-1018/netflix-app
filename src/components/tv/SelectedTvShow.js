import { useParams } from 'react-router-dom';
import SideBar from "../SideBar";
import { addSecondaryTvShowVideoTrailer, addSecondaryTvShowVideoDetails, addTvShowCastDetails } from "../../store/tvSlice";
import TvShowTrailer from './TvShowTrailer';
import TvShowTitle from './TvShowTitle';
import CastDetailsContainer from "../castdetails/CastDetailsContainer"
import { removeTvShowCastDetails } from '../../store/tvSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const SelectedTvShow = () => {

   const showCastDetails = useSelector((store) => store.tv.showCastDetails)

    const dispatch = useDispatch();

    const {param} = useParams();

    useEffect(() => {
        return () => {
          dispatch(removeTvShowCastDetails());
        };
      }, []);

    if(!param) return(null);

    return(
        <div >
            <SideBar showMovies={true} ShowTv={true}/>
            <TvShowTrailer message={"SecondaryVideo"} action={addSecondaryTvShowVideoTrailer} tvShowId = {param} />
            <TvShowTitle message={"SecondaryVideo"} action={addSecondaryTvShowVideoDetails} tvShowId = {param} />
            { showCastDetails && <CastDetailsContainer stream={"tv"} action = {addTvShowCastDetails} title={"Cast and Crew"} id = {param} />}
        </div>
    )
}

export default SelectedTvShow;