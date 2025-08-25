import React, { useState } from 'react';
import './Proyectos.css';
import MiCurriculum, { miCurriculumBrief } from './Proyecto-Curriculum/MiCurriculum';

const ProjectCard = ({ proyecto, alSeleccionarProyecto }) => {
  return (
    <div className="project-card" onClick={() => alSeleccionarProyecto(proyecto)}>
      <div className="project-header">
        <h3 className="project-title">{proyecto.titulo}</h3>
      </div>
      <div className="project-body">
        <p className="project-description">{proyecto.descripcion}</p>
      </div>
    </div>
  );
};

// Componente principal de la sección de proyectos
function Proyectos() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  // Array de objetos con los datos de tus proyectos.
  // Usamos el objeto importado en lugar de tener la información repetida.
  const misProyectos = [
    miCurriculumBrief,
    // Aquí se añaden más proyectos en el futuro
  ];

  if (proyectoSeleccionado) {
    return (
      <div className="contenedor-proyecto-detalle">
        <button onClick={() => setProyectoSeleccionado(null)} className="boton-volver">
          &larr; Volver a Proyectos
        </button>
        {proyectoSeleccionado.titulo === 'Curriculum Vitae Online' ? (
          <MiCurriculum proyecto={proyectoSeleccionado} alVolver={() => setProyectoSeleccionado(null)} />
        ) : (
          <ProjectDetails proyecto={proyectoSeleccionado} alVolver={() => setProyectoSeleccionado(null)} />
        )}
      </div>
    );
  }

  return (
    <section id="proyectos" className="seccion-cv">
      <h1>Mis Proyectos</h1>
      <p>Aquí se mostrarán los proyectos en los que he trabajado.</p>
      <div className="proyectos-grid">
        {misProyectos.map((proyecto, index) => (
          <ProjectCard key={index} proyecto={proyecto} alSeleccionarProyecto={setProyectoSeleccionado} />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
