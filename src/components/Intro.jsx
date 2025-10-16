import React from 'react'

export default function Intro() {
  return (
    <section id="sobre-mi" className="card p-4 mb-4">
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <img
            src="https://i.blogs.es/50a1c5/t4yxpvu/840_560.jpeg"
            className="intro-photo"
          />
        </div>
        <div className="col">
          <h2>Carlo Fuentes</h2>
          <p>Estudiante de Ingenieria Informática en DuocUC</p>
          <p><strong>Tecnologías:</strong> React · Bootstrap · JavaScript</p>
        </div>
      </div>
    </section>
  );
}
