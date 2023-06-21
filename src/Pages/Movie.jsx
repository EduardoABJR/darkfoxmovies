import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import{FaStar} from 'react-icons/fa'

import MovieCard from "../components/MovieCard";

import "./Movie.css";
const imageUrl = 'https://image.tmdb.org/t/p/w500/';
const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=ae90b692d74c69c93571dbce28938f6e';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?language=pt-BR&${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
        <div className="row">
        <div className="col-sm-6">
    
         <img className='img-fluid img-style' src={imageUrl + movie.poster_path } alt={movie.title}/>
       </div>
        <div className="card col-sm-6">
          <ul className="list-group list-group-flush">
          <li className="list-group-item">            
          <h3 className="card-title">{movie.original_title}</h3>
            <p className="card-text">{movie.overview}</p></li>
            <li className="list-group-item">  <h3>
                      <FaStar /> Avaliação:
                    </h3>
                    <p>{movie.vote_average} Estrelas</p></li>
                    <li className="list-group-item">  <h3>
                      <BsHourglassSplit /> Duração:
                    </h3>
                    <p>{movie.runtime} minutos</p></li>
            <li className="list-group-item"> <h3>
                      <BsWallet2 /> Orçamento:
                    </h3>
                    <p>{formatCurrency(movie.budget)}</p></li>
            <li className="list-group-item">            <h3>
                      <BsGraphUp /> Receita:
                    </h3>
                    <p>{formatCurrency(movie.revenue)}</p></li>

          </ul>
        </div>
        </div>
        </>
      )}
    
    </div>
  );
};

export default Movie;

