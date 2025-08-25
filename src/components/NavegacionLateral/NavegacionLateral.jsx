import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavegacionLateral.css';

/**
 * COMPONENTE: NavegacionLateral
 * 
 * Sidebar de navegación con información del perfil y enlaces de contacto.
 * Utiliza forwardRef para permitir control del scroll desde componentes padre.
 * 
 * Props:
 * - mostrarBienvenidaAlInicio: Función para resetear la vista al hacer clic en la foto
 * - ref: Referencia para control del scroll desde App.jsx
 */
const NavegacionLateral = forwardRef(({ mostrarBienvenidaAlInicio }, ref) => {
  // CONFIGURACIÓN: Secciones del menú de navegación
  const seccionesCV = [
    { id: 'sobre-mi', nombre: 'Sobre Mí', path: '/sobre-mi' },
    { id: 'estudios', nombre: 'Estudios', path: '/estudios' },
    { id: 'experiencia', nombre: 'Experiencia', path: '/experiencia' },
    { id: 'proyectos', nombre: 'Proyectos', path: '/proyectos' },
    { id: 'contacto', nombre: 'Contacto', path: '/contacto' },
  ];

  const location = useLocation();

  return (
    <div className="navegacion-lateral" ref={ref}>
      {/* SECCIÓN: Encabezado del perfil con foto y datos básicos */}
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
        <h1 className="nombre-cv">Guillermo García Inurria</h1>
        <h2 className="titulo-cv">Desarrollador Frontend &<br></br> Técnico ASIR</h2>
      </div>

      {/* SECCIÓN: Menú de navegación principal */}
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

      {/* SECCIÓN: Información de contacto con iconos y enlaces */}
      <div className="info-contacto-lateral">
        <h3>Puedes contactarme en:</h3>
        <ul>
          {/* CONTACTO: Email con icono y enlace mailto */}
          <li title='Correo electrónico'>
            <a href="mailto:garciainurriaguillermo@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdEmail className="icon-contacto" /> garciainurriaguillermo@gmail.com
            </a>
          </li>
          {/* CONTACTO: Teléfono con icono y enlace tel */}
          <li title='Teléfono'>
            <a href="tel:+34645192414" target="_blank" rel="noopener noreferrer">
              <MdPhone className="icon-contacto" /> +34 645 192 414
            </a>
          </li>
          {/* CONTACTO: GitHub con icono y enlace externo */}
          <li title='GitHub'>
            <a href="https://github.com/garcGuillermo" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon-contacto" /> GitHub
            </a>
          </li>
          {/* CONTACTO: LinkedIn con icono y enlace externo */}
          <li title='LinkedIn'>
            <a href="https://www.linkedin.com/in/guillermo-garc%C3%ADa-inurria-857084152/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon-contacto" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* SECCIÓN: Copyright dinámico con año actual */}
      <div className="copyright-lateral">
        <p>&copy; {new Date().getFullYear()} Guillermo García Inurria</p>
      </div>
    </div>
  );
});

export default NavegacionLateral;
