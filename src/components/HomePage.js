import useFilterMovieByLanguage from "../hooks/useFilterMovieByLanguage";
import useFilterMovieByCategory from "../hooks/useFilterMoviesByCategory";
import {
  addHindiMovies,
  addKannadaMovies,
  addMalayalamMovies,
  addNowPlayingMovies,
  addPopularMovies,
  addTamilMovies,
  addTeluguMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/movieSlice";
import SecondaryContainer from "./SecondaryContainer";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

const HomePage = () => {
  useFilterMovieByCategory(addNowPlayingMovies, "now_playing");
  useFilterMovieByCategory(addPopularMovies, "popular");
  useFilterMovieByCategory(addTopRatedMovies, "top_rated");
  useFilterMovieByCategory(addUpcomingMovies, "upcoming");
  useFilterMovieByLanguage(addTamilMovies, "ta");
  useFilterMovieByLanguage(addTeluguMovies, "te");
  useFilterMovieByLanguage(addHindiMovies, "hi");
  useFilterMovieByLanguage(addMalayalamMovies, "ml");
  useFilterMovieByLanguage(addKannadaMovies, "ka");

  return (
    <div>
      <SideBar showMovies={false} ShowTv={true}/>
      <VideoContainer />
      <SecondaryContainer />
    </div>
  );
};

export default HomePage;
