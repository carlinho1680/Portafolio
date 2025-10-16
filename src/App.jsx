import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Noticias from './components/Noticias';

function Home() {
  return (
    <>
      <Intro />

      
      <Link to="/noticias" className="btn btn-primary mb-4">
        Ir a Noticias
      </Link>

      <Projects />
      <div id="sobre-mi" className="mt-4">
        <h2>Sobre mí</h2>
        <p>Soy Carlo Fuentes, estudiante de Ingenieria Informatica en DuocUC  interesado en crear aplicaciones web modernas y funcionales.</p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </main>
    </Router>
  );
}
