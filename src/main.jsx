import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Movie from './Pages/Movie.jsx'
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'
import Trending from './Pages/Trending.jsx'
import BestMovies from './Pages/BestMovies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/movie/:id' element={<Movie />}> </Route>
        <Route path='/search' element={<Search />}> </Route>
        <Route path='/trending' element={<Trending />}> </Route>
        <Route path='/best' element={<BestMovies />}> </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
