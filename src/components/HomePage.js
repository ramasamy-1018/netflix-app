import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SecondaryContainer from "./SecondaryContainer";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

const HomePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <SideBar />
      <VideoContainer />
      <SecondaryContainer />
    </div>
  );
};

export default HomePage;
