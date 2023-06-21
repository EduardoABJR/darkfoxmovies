import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './MoviesGrid.css'
import './Home.css'

const moviesURL = 'https://api.themoviedb.org/3/trending/movie/week'
const apiKey = 'api_key=ae90b692d74c69c93571dbce28938f6e'


const Trending = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results)
       
    };
    useEffect(() => {

        const topRatedUrl = `${moviesURL}?language=pt-BR&${apiKey}`;
        getTopRatedMovies(topRatedUrl)
    }, []);

  return (

    
    <div>
        <h2 >Em Alta</h2>
        <div className='cards'>
        {topMovies.length === 0 && <p><div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div><div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div><div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div></p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id}movie={movie}/>)}
        </div>
        
    </div>
  );
}

export default Trending;