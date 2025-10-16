import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Portafolio</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sobre mí</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/noticias">Noticias</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
