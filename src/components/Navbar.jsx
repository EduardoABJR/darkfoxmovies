import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const hundleSubmit = (e) => {
        e.preventDefault()
      
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch('');
    };


  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    <div className="container-fluid">
      <span className="navbar-brand" >DarkFox Movies</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/"> Home </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/trending">Em Alta</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/best">Melhores Avaliados</Link>
          </li>

        </ul>
        <form className='search-style' role="search" onSubmit={hundleSubmit}>
          <input className="form-control" type="search" placeholder="Pesquisar" aria-label="Search"  onChange={(e) => setSearch(e.target.value)}
      value={search} />
        <button className="btn btn-outline-light btn" type="submit"><BiSearchAlt2 /> </button>
        </form>
      </div>
    </div>
  </nav>


          

     
  )
}

export default Navbar

 