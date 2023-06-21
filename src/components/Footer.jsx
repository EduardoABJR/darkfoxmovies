import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">Criado por Eduardo Bonelli Jr</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary gith" href="https://github.com/EduardoABJR"><i className="bi bi-github gith"></i></a></li>
      <li className="ms-3"><a className="text-body-secondary insta" href="https://www.instagram.com/eduardo.bonellijr/?hl=bg"><i className="bi bi-instagram insta"></i></a></li>
      <li className="ms-3"><a className="text-body-secondary linke" href="https://www.linkedin.com/in/eduardo-abjr/"><i className="bi bi-linkedin linke"></i></a></li>
    </ul>
  </footer>
  )
}

export default Footer