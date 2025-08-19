import React from 'react';
import './Proyectos.css';

// Objeto que exportamos con la información breve del proyecto
export const miCurriculumBrief = {
  title: 'Mi Portfolio Personal',
  description: 'Este es el proyecto en el que estamos trabajando ahora. Un CV y portfolio personal para mostrar mis habilidades y proyectos.',
  techs: ['React', 'CSS', 'Node.js', 'Vercel'],
  githubUrl: 'https://github.com/garcGuillermo/mi-curriculum',
};

// Componente principal de MiCurriculum
function MiCurriculum({ project, onBack }) {
  // Aseguramos que el objeto project exista para evitar errores
  if (!project) return null;

  return (
    <div className="project-details-page">
      <button onClick={onBack} className="boton-volver">
        &larr; Volver a Proyectos
      </button>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      
      <h3>Tecnologías Utilizadas</h3>
      <div className="project-techs">
        {project.techs.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      
      <h3>Enlaces</h3>
      <div className="project-footer">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
}

export default MiCurriculum;
