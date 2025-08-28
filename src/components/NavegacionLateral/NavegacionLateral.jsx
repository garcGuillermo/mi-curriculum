// ============================================================
// NavegacionLateral.jsx
// ============================================================
// Componente para la barra de navegación lateral del portfolio.
//
// - Permite navegar entre las distintas secciones de la SPA.
// - Incluye iconos, animaciones y gestión de sección activa.
// - Adaptado a dispositivos móviles y accesible.
// ============================================================
import React, { useState, forwardRef } from 'react';
// Icono hamburguesa simple SVG
const HamburguesaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="7" width="32" height="3" rx="1.5" fill="currentColor" />
    <rect y="15" width="32" height="3" rx="1.5" fill="currentColor" />
    <rect y="23" width="32" height="3" rx="1.5" fill="currentColor" />
  </svg>
);
import { Link } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import './NavegacionLateral.css';

const NavegacionLateral = forwardRef(({ mostrarBienvenidaAlInicio }, ref) => {
  // CONFIGURACIÓN: Secciones del menú de navegación
  const seccionesCV = [
    { id: 'sobre-mi', nombre: 'Sobre Mí', path: '/sobre-mi' },
    { id: 'estudios', nombre: 'Estudios', path: '/estudios' },
    { id: 'experiencia', nombre: 'Experiencia', path: '/experiencia' },
    { id: 'proyectos', nombre: 'Proyectos', path: '/proyectos' },
    { id: 'contacto', nombre: 'Contacto', path: '/contacto' },
  ];

const [menuAbierto, setMenuAbierto] = useState(false);

const handleMenuClick = (id) => {
  if (window.innerWidth <= 1050) {
    // Cierra el menú si es móvil
    setMenuAbierto(false);
    // Espera a que el contenido se renderice
    setTimeout(() => {
      const seccion = document.getElementById(id);
      if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Ajusta el tiempo si es necesario
  }
};

  return (
    <div className="navegacion-lateral" ref={ref}>
      {/* SECCIÓN: Encabezado del perfil con foto y datos básicos */}
      <div className="perfil-encabezado-lateral">
        <Link to="/" onClick={mostrarBienvenidaAlInicio}>
          <img
            src={'https://avatars.githubusercontent.com/u/222676124?v=4'}
            alt="Foto de perfil propia"
            className="perfil-foto-lateral"
            onError={(e) => { e.target.onerror = null; e.target.src = fotoPerfil; }}
            title='Haz clic para volver al inicio'
          />
        </Link>
        <h1 className="nombre-cv">Guillermo García Inurria</h1>
        <h2 className="titulo-cv">Desarrollador Frontend &<br></br> Técnico ASIR</h2>
      </div>

      {/* Botón hamburguesa solo visible en móvil */}
      <button
        className="boton-hamburguesa-nav"
        aria-label="Abrir menú de navegación"
        type="button"
        onClick={() => setMenuAbierto(prev => !prev)}
      >
        <HamburguesaIcon />
      </button>

      <div className={`navegacion-plegada${menuAbierto ? ' menu-abierto' : ''}`} ref={ref}>
        {/* SECCIÓN: Menú de navegación principal */}
        <nav className="menu-principal-nav">
          <ul>
            {seccionesCV.map(seccion => (
              <li key={seccion.id} title={seccion.nombre}>
                <Link to={seccion.path} onClick={() => handleMenuClick(seccion.id)}>
                  {seccion.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* SECCIÓN: Información de contacto con iconos y enlaces */}
        <div className="info-contacto-lateral">
          <h3>Puedes encontrarme en:</h3>
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
              <a href="https://www.linkedin.com/in/guillermo-garcia-inurria" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon-contacto" /> LinkedIn
              </a>
            </li>
              {/* DESCARGA: Currículum en PDF */}
              <li title='Descargar CV'>
                  <a href='https://rxresu.me/garcguillermo/desarrollador-frontend2025' download target="_blank" rel="noopener noreferrer">
                    <FaFilePdf className="icon-contacto" /> Descargar CV (PDF)
                  </a>
              </li>
          </ul>
        </div>

        {/* SECCIÓN: Copyright dinámico con año actual */}
        <div className="copyright-lateral">
          <p>&copy; {new Date().getFullYear()} Guillermo García Inurria</p>
        </div>
      </div>
    </div>
  );
});

export default NavegacionLateral;
