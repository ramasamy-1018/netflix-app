import MovieSecondaryContainer from "./MovieSecondaryContainer";
import MovieTrailerContainer from "./MovieTrailerContainer";
import { useEffect } from "react";
import useAddMoviesToStore from "../../hooks/useAddMoviesToStore"

const ShowAllMovies = () => {

  useAddMoviesToStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <MovieTrailerContainer />
      <MovieSecondaryContainer />
    </div>
  );
};

export default ShowAllMovies;
