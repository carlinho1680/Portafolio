import React, { useEffect, useState } from 'react'

function ProjectCard({p}){
  return (
    <div className="col-md-4 mb-3">
      <div className="card project-card h-100">
        <img src={p.image} className="card-img-top" alt={p.title} />
        <div className="card-body">
          <h5 className="card-title">{p.title}</h5>
          <p className="card-text">{p.description}</p>
          <p><small>{p.tech.join(', ')}</small></p>
          <a href={p.link} className="btn btn-primary" target="_blank" rel="noreferrer">GIT</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects(){
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    fetch('/data/projects.json')
      .then(r=>r.json())
      .then(setProjects)
      .catch(err=>{ console.error('Error cargando projects.json', err) })
  },[])

  return (
    <section id="proyectos" className="mb-4">
      <h3>Proyectos</h3>
      <div className="row">
        {projects.map(p=> <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}
