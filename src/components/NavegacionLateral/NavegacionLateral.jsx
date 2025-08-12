import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavegacionLateral.css'; // Asegúrate de tener un archivo CSS para estilos

function NavegacionLateral({ mostrarBienvenidaAlInicio }) {
  const seccionesCV = [
    { id: 'sobre-mi', nombre: 'Sobre Mí', path: '/sobre-mi' },
    { id: 'estudios', nombre: 'Estudios', path: '/estudios' },
    { id: 'experiencia', nombre: 'Experiencia', path: '/experiencia' },
    { id: 'proyectos', nombre: 'Proyectos', path: '/proyectos' },
    { id: 'contacto', nombre: 'Contacto', path: '/contacto' },
  ];

  const location = useLocation();

  return (
    <div className="navegacion-lateral">
      <div className="perfil-encabezado-lateral">
        <Link to="/" onClick={mostrarBienvenidaAlInicio}>
          <img
            src="https://placehold.co/120x120/ecf0f1/2c3e50?text=Tu+Foto"
            alt="Foto de perfil de Guillermo"
            className="perfil-foto-lateral"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/120x120/cccccc/333333?text=Foto'; }}
            title='Haz clic para volver al inicio'
          />
        </Link>
        <h1 className="nombre-cv">Guillermo</h1>
        <h2 className="titulo-cv">Desarrollador Frontend &<br></br> Técnico ASIR</h2>
      </div>

      <nav className="menu-principal-nav">
        
        <ul>
          {seccionesCV.map(seccion => (
            <li key={seccion.id} title={seccion.nombre}>
              <Link to={seccion.path}>
                {seccion.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="info-contacto-lateral">
        <h3>Puedes contactarme en:</h3>
        <ul>
          <li title='Correo electrónico'>
            <a href="mailto:garciainurriaguillermo@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdEmail className="icon-contacto" /> garciainurriaguillermo@gmail.com
            </a>
          </li>
          <li title='Teléfono'>
            <a href="tel:+34645192414" target="_blank" rel="noopener noreferrer">
              <MdPhone className="icon-contacto" /> +34645192414
            </a>
          </li>
          <li title='GitHub'>
            <a href="https://github.com/garcGuillermo" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon-contacto" /> GitHub
            </a>
          </li>
          <li title='LinkedIn'>
            <a href="https://www.linkedin.com/in/guillermo-garc%C3%ADa-inurria-857084152/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon-contacto" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavegacionLateral;
