import { useParams} from 'react-router-dom';
import SideBar from "../SideBar";
import { addMovieCastDetails, addSecondaryMovieVideoDetails, addSecondaryMovieVideoTrailer, removeMovieCastDetails } from "../../store/movieSlice";
import MovieTrailer from "./MovieTrailer";
import MovieTitle from "./MovieTitle";
import CastDetailsContainer from '../castdetails/CastDetailsContainer';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';


const SelectedMovie = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
          dispatch(removeMovieCastDetails());
        };
      }, []);
    
    const {param} = useParams()
    if(!param) return(null);

    return(
        <div >
            <SideBar showMovies={true} ShowTv={true}/>
            <MovieTrailer message={"SecondaryVideo"} action={addSecondaryMovieVideoTrailer} movieId = {param} />
            <MovieTitle message={"SecondaryVideo"} action={addSecondaryMovieVideoDetails} movieId = {param} />
            <CastDetailsContainer stream={"movie"} action = {addMovieCastDetails} title={"Cast and Crew"} id = {param} />
        </div>
    )
}

export default SelectedMovie;