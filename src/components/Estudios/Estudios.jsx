// ============================================================
// Estudios.jsx
// ============================================================
// Componente para mostrar la formación académica y cursos.
//
// - Lista los estudios realizados y certificaciones relevantes.
// - Presenta la información de forma visual y estructurada.
// - Adaptado a dispositivos móviles y accesible.
// ============================================================
import React, { useState } from 'react';
import './Estudios.css';

// Array de estudios y formación académica
const estudiosYFormacion = [
  {
    id: 'ifcd0110',
    titulo: "Confección y Publicación de Páginas Web (IFCD0110)",
    centro: "CEDECO, Sevilla",
    periodo: "2025",
    detalles: [
      "Curso intensivo enfocado en el desarrollo web frontend, con un fuerte énfasis en HTML, CSS y JavaScript.",
      "Aprendizaje práctico de herramientas y metodologías para la creación de sitios web responsivos y accesibles."
    ]
  },
  {
    id: 'js-algoritmos',
    titulo: "JavaScript Algorithms and Data Structures",
    centro: "FreeCodeCamp, online",
    periodo: "2024",
    enlace: "https://www.freecodecamp.org/certification/guillermo_garcia_inurria/javascript-algorithms-and-data-structures-v8",
    detalles: [
      "Certificación de autoevaluación y práctica en algoritmos de JavaScript y estructuras de datos."
    ]
  },
  {
    id: 'rwd',
    titulo: "Responsive Web Design",
    centro: "FreeCodeCamp, online",
    periodo: "2023",
    enlace: "https://www.freecodecamp.org/certification/guillermo_garcia_inurria/responsive-web-design",
    detalles: [
      "Certificación que cubre HTML5, CSS3, Flexbox y CSS Grid para la creación de diseños web adaptativos."
    ]
  },
  {
    id: 'asir',
    titulo: "Técnico Superior de Administración de Sistemas Informáticos en Red (ASIR)",
    centro: "I.E.S Punta del Verde, Sevilla",
    periodo: "2016 - 2018",
    detalles: [
      "Formación completa en gestión de redes, servidores, sistemas operativos y seguridad informática.",
      "Desarrollo de conocimientos en lenguajes de programación y bases de datos."
    ]
  },
  {
    id: 'bachillerato',
    titulo: "Bachillerato de Ciencias",
    centro: "I.E.S Federico Mayor Zaragoza, Sevilla",
    periodo: "",
    detalles: [
      "Base académica sólida en matemáticas, física y química, fomentando el pensamiento lógico y analítico."
    ]
  },
];

const Estudios = () => {
  // Estado para controlar qué estudio está expandido
  const [openItemId, setOpenItemId] = useState(null);

  // Alterna la expansión del estudio seleccionado
  const handleToggle = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section id="estudios" className="seccion-cv">
      <h1>Estudios y Formación</h1>
      
      <div className="estudios-lista">
        {estudiosYFormacion.map((estudio) => (
          <div key={estudio.id} className="estudios-item">
            <button
              onClick={() => handleToggle(estudio.id)}
              className="estudios-encabezado-toggle"
              aria-expanded={openItemId === estudio.id}
              aria-controls={`detalles-${estudio.id}`}
            >
              <div className="estudios-info-principal">
                <h3 className="estudios-curso">{estudio.titulo}</h3>
                <h4 className="estudios-centro">{estudio.centro}</h4>
              </div>
              <div className="estudios-info-secundaria">
                <span className="estudios-fecha">{estudio.periodo}</span>
                {/* Enlace al certificado (si existe) */}
                {estudio.enlace && (
                  <a href={estudio.enlace} target="_blank" rel="noopener noreferrer" className="estudios-enlace-texto" onClick={(e) => e.stopPropagation()}>
                    Ver Certificado
                  </a>
                )}
                <span className={`toggle-icon ${openItemId === estudio.id ? 'open' : ''}`}>▼</span>
              </div>
            </button>
            
            <div
              id={`detalles-${estudio.id}`}
              className={`estudios-contenido-desplegable ${openItemId === estudio.id ? 'open' : ''}`}
            >
              <ul className="estudios-detalles">
                {estudio.detalles.map((detalle, detIndex) => (
                  <li key={detIndex}>{detalle}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Estudios;
