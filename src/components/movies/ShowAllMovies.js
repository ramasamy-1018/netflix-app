import MovieSecondaryContainer from "./MovieSecondaryContainer";
import MovieTrailerContainer from "./MovieTrailerContainer";
import { useEffect, useState } from "react";
import Shimmer from "../../utils/Shimmer";
import useAddMoviesToStore from "../../hooks/useAddMoviesToStore"

const ShowAllMovies = () => {

  const [contentLoaded, setContentLoaded] = useState(false);
  useAddMoviesToStore();

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 2000);
  }, []);

  if(!contentLoaded) return (<Shimmer />)

  return (
    <div>
      <MovieTrailerContainer />
      <MovieSecondaryContainer />
    </div>
  );
};

export default ShowAllMovies;
