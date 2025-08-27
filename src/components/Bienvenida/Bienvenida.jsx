// ============================================================
// Bienvenida.jsx
// ============================================================
// Componente de bienvenida interactiva para la portada del CV.
//
// - Muestra mensaje de bienvenida, tutorial y tecnologías usadas.
// - Permite mostrar/ocultar la sección con un botón toggle.
// ============================================================
import React from 'react';
import './Bienvenida.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiVite, SiGooglegemini, SiAnthropic, SiVercel } from 'react-icons/si';

// Array de tecnologías con iconos para renderizado dinámico
const tecnologias = [
  { nombre: 'HTML5', icono: <FaHtml5 className="tecnologia-icono" /> },
  { nombre: 'CSS3', icono: <FaCss3Alt className="tecnologia-icono" /> },
  { nombre: 'Javascript', icono: <FaJs className="tecnologia-icono" /> },
  { nombre: 'React', icono: <FaReact className="tecnologia-icono" /> },
  { nombre: 'Vercel', icono: <SiVercel className="tecnologia-icono" /> },
  { nombre: 'Node.js', icono: <FaNodeJs className="tecnologia-icono" /> },
  { nombre: 'Vite', icono: <SiVite className="tecnologia-icono" /> },
  { nombre: 'Git', icono: <FaGitAlt className="tecnologia-icono" /> },
  { nombre: 'Claude Sonnet 4', icono: <SiAnthropic className="tecnologia-icono" /> },
  { nombre: 'Gemini', icono: <SiGooglegemini className="tecnologia-icono" /> }
];

function Bienvenida({ onToggle, estaVisible }) {
  return (
    <section 
      id="bienvenida" 
      // Clase condicional para mostrar/ocultar contenido
      className={`seccion-cv bienvenida-interactiva ${estaVisible ? '' : 'bienvenida-replegada'}`}
    >
      {/* Contenido principal - se oculta cuando está replegada */}
      <div className="bienvenida-contenido">
        <h1>¡Bienvenid@ a mi Currículum Online!</h1>
        <p>
          Me alegra que estés aquí. He creado esta plataforma interactiva donde podrás explorar
          mi perfil profesional, experiencia, formación y habilidades y conocerme un poco más.
        </p>
        <h2>Pequeño tutorial de navegación:</h2>
        <p>
          Utiliza el menú de navegación lateral para moverte entre las diferentes secciones;
          este desplegable se ocultará automáticamente. En la sección <i>Sobre Mi</i> te cuento un poco más
          sobre el proyecto.
        </p>
        <p>
          ¡Espero que disfrutes la visita!
        </p>
        
        {/* Listado de tecnologías utilizadas en el proyecto */}
        <h2>Principales tecnologías utilizadas:</h2>
        <div className="tecnologias-lista">
          {tecnologias.map((tech, index) => (
            <div key={index} className="tecnologia-item">
              {tech.icono}
              <span>{tech.nombre}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Botón toggle para mostrar/ocultar la sección */}
      <button 
        className="toggle-bienvenida-btn" 
        onClick={onToggle}
        aria-label={estaVisible ? "Ocultar bienvenida" : "Mostrar bienvenida"}
        title={estaVisible ? "Ocultar" : "Mostrar bienvenida"}
      >
        {estaVisible ? '▲' : '▼'}
      </button>
    </section>
  );
}

export default Bienvenida;
