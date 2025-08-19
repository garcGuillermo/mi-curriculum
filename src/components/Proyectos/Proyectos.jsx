import React, { useState } from 'react';
import './Proyectos.css';
import MiCurriculum, { miCurriculumBrief } from './MiCurriculum';

const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <div className="project-card" onClick={() => onSelectProject(project)}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
      </div>
      <div className="project-body">
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

// Componente principal de la sección de proyectos
function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Array de objetos con los datos de tus proyectos.
  // Usamos el objeto importado en lugar de tener la información repetida.
  const myProjects = [
    miCurriculumBrief,
    // Si quieres añadir más proyectos, puedes hacerlo aquí
  ];

  if (selectedProject) {
    if (selectedProject.title === 'Mi Portfolio Personal') {
      return <MiCurriculum project={selectedProject} onBack={() => setSelectedProject(null)} />;
    } else {
      return <ProjectDetails project={selectedProject} onBack={() => setSelectedProject(null)} />;
    }
  }

  return (
    <section id="proyectos" className="seccion-cv">
      <h1>Mis Proyectos</h1>
      <p>Aquí se mostrarán los proyectos en los que he trabajado.</p>
      <div className="proyectos-grid">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} project={project} onSelectProject={setSelectedProject} />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
