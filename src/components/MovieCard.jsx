import { Link } from 'react-router-dom'
import{FaStar} from 'react-icons/fa'
import React from 'react'
import './MovieCard.css'


const imageUrl = 'https://image.tmdb.org/t/p/w500/';


const MovieCard = ({movie, showLink = true }) => {
  
  return (
<div className=" card-style" >
<div className="card shadow-sm">
  <img classNameName='card-img-top card-style' src={imageUrl + movie.poster_path } alt={movie.title}/>
  <div className="card-body">
    <h5>{movie.title}</h5>
    <p className="card-text">{movie.overview}</p>
    <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
        <span type="button" className="btn btn-sm btn-outline-secondary btn1">{showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}</span>
      </div>
      <div className="text-body-secondary"><FaStar /> {movie.vote_average}</div>
    </div>
  </div>
</div>
</div>
  )
}

export default MovieCard
