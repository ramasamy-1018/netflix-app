import { useState, useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useGenres = (genreIds) => {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?',API_OPTIONS);
      const data = await response.json();
      const selectedGenres = data.genres.filter(genre => genreIds.includes(genre.id));
      const genreNames = selectedGenres.map(genre => genre.name);
      setGenres(genreNames);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, [genreIds]);

  return genres;
};

export default useGenres;
