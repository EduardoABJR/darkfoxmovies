import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'api_key=ae90b692d74c69c93571dbce28938f6e';

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?language=pt-BR&${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container row">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} className='col-sm-4'/>)}
      </div>
    </div>
  );
};

export default Search;