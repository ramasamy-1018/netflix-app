import { useParams } from 'react-router-dom';
import SideBar from "../SideBar";
import { addSecondaryMovieVideoDetails, addSecondaryMovieVideoTrailer } from "../../store/movieSlice";
import MovieTrailer from "./MovieTrailer";
import MovieTitle from "./MovieTitle";


const SelectedMovie = () => {
    
    const {param} = useParams()
    if(!param) return(null);

    return(
        <div >
            <SideBar showMovies={true} ShowTv={true}/>
            <MovieTrailer message={"SecondaryVideo"} action={addSecondaryMovieVideoTrailer} movieId = {param} />
            <MovieTitle message={"SecondaryVideo"} action={addSecondaryMovieVideoDetails} movieId = {param} />
        </div>
    )
}

export default SelectedMovie;