// ============================================================
// MiCurriculum.jsx
// ============================================================
// Página de detalles y presentación del proyecto "mi-curriculum".
//
// - Resume objetivos, arquitectura, stack tecnológico y características clave.
// - Incluye llamadas a la acción y enlaces a código fuente.
// - Presenta la información de forma visual y estructurada.
// ============================================================
import React, { useState } from 'react';
import ExploradorProyecto from './ExploradorProyecto';
import '../Proyectos.css';
import './MiCurriculum.css';

// Componente principal de MiCurriculum
function MiCurriculum({ proyecto }) {
  const [mostrarExplorador, setMostrarExplorador] = useState(false);

  // Aseguramos que el objeto proyecto exista para evitar errores
  if (!proyecto) return null;

  // Si el explorador está activo, mostrarlo
  if (mostrarExplorador) {
    return <ExploradorProyecto alVolver={() => setMostrarExplorador(false)} />;
  }

  return (
    <div className="pagina-detalles-proyecto">
      <div className="hero-proyecto">
        <h1 className="titulo-principal-proyecto">{proyecto.titulo}</h1>
        <p className="descripcion-principal-proyecto">{proyecto.descripcion}</p>
      </div>

      <div className="cta-explorador">
        <h2>🔍 Explora el Código</h2>
        <p>
          Navega por la estructura completa del proyecto, examina cada archivo y descubre 
          la lógica de implementación detrás de cada componente.
        </p>
        <button 
          onClick={() => setMostrarExplorador(true)} 
          className="boton-explorar-codigo"
        >
          🚀 Explorar Arquitectura del Proyecto
        </button>
      </div>

      <div className="resumen-proyecto">
        <div className="seccion-resumen">
          <h2>📋 Resumen del Proyecto</h2>
          <p>
            Este portfolio personal es una <strong>Single Page Application (SPA)</strong> desarrollada con React que 
            funciona como un CV interactivo y moderno. El proyecto demuestra competencias en desarrollo frontend, 
            integración de APIs, y despliegue en la nube. Mi objetivo es demostrar la capacidad de crear una página 
            web moderna, funcional y atractiva que sirva como carta de presentación profesional.
          </p>
        </div>

        <div className="seccion-resumen">
          <h2>🎯 Objetivos del Desarrollo</h2>
          <ul className="lista-objetivos">
            <li><strong>Mostrar habilidades técnicas:</strong> Demostrar competencias en React, CSS moderno, y JavaScript</li>
            <li><strong>Experiencia de usuario:</strong> Crear una navegación fluida e intuitiva</li>
            <li><strong>Diseño Responsivo:</strong> Garantizar compatibilidad en todos los dispositivos</li>
            <li><strong>Funcionalidad real:</strong> Incluir un sistema de contacto funcional</li>
            <li><strong>Código limpio:</strong> Implementar buenas prácticas y arquitectura escalable</li>
          </ul>
        </div>

        <div className="seccion-resumen">
          <h2>🛠️ Tecnologías Utilizadas</h2>
          <div className="stack-tecnologico">
            <div className="categoria-tecnologia">
              <h4>Frontend</h4>
              <div className="tecnologias-proyecto">
                <span className="etiqueta-tecnologia frontend">React 19</span>
                <span className="etiqueta-tecnologia frontend">React Router</span>
                <span className="etiqueta-tecnologia frontend">Módulos CSS</span>
                <span className="etiqueta-tecnologia frontend">Iconos React</span>
              </div>
            </div>
            <div className="categoria-tecnologia">
              <h4>Backend & API</h4>
              <div className="tecnologias-proyecto">
                <span className="etiqueta-tecnologia backend">Node.js</span>
                <span className="etiqueta-tecnologia backend">Resend</span>
                <span className="etiqueta-tecnologia backend">Vercel</span>
              </div>
            </div>
            <div className="categoria-tecnologia">
              <h4>Herramientas de Desarrollo</h4>
              <div className="tecnologias-proyecto">
                <span className="etiqueta-tecnologia herramientas">Vite</span>
                <span className="etiqueta-tecnologia herramientas">ESLint</span>
                <span className="etiqueta-tecnologia herramientas">Git</span>
              </div>
            </div>
            <div className="categoria-tecnologia">
              <h4>Deployment</h4>
              <div className="tecnologias-proyecto">
                <span className="etiqueta-tecnologia deploy">Vercel</span>
                <span className="etiqueta-tecnologia deploy">GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="seccion-resumen">
          <h2>✨ Características Destacadas</h2>
          <div className="grid-caracteristicas">
            <div className="tarjeta-caracteristica">
              <h4>🧭 Navegación Inteligente</h4>
              <p>Sistema de navegación SPA con auto-ocultación del mensaje de bienvenida y scroll suave.</p>
            </div>
            <div className="tarjeta-caracteristica">
              <h4>📱 Diseño Responsive</h4>
              <p>Interfaz adaptativa que funciona perfectamente en móviles, tablets y desktop.</p>
            </div>
            <div className="tarjeta-caracteristica">
              <h4>📧 Contacto Funcional</h4>
              <p>Formulario de contacto real con validación, rate limiting y envío de emails.</p>
            </div>
            <div className="tarjeta-caracteristica">
              <h4>🎨 Diseño del Sistema</h4>
              <p>Sistema de variables CSS cohesivo con paleta de colores y tipografía consistente.</p>
            </div>
            <div className="tarjeta-caracteristica">
              <h4>⚡ Mucho más moderno</h4>
              <p>Optimizado con Vite, lazy loading y técnicas de optimización modernas como ESLint</p>
            </div>
            <div className="tarjeta-caracteristica">
              <h4>🔒 Seguridad</h4>
              <p>Validaciones del lado del cliente y del servidor, sanitización XSS y limitaciones por seguridad.</p>
            </div>
          </div>
        </div>

        <div className="seccion-resumen">
          <h2>🏗️ Arquitectura del Proyecto</h2>
          <p>
            El proyecto sigue una arquitectura de componentes modulares con separación clara de responsabilidades:
          </p>
          <ul className="lista-arquitectura">
            <li><strong>App.jsx:</strong> Componente raíz con gestión de estado global y enrutamiento</li>
            <li><strong>Componentes:</strong> Componentes reutilizables organizados por funcionalidad</li>
            <li><strong>Modulos CSS:</strong> Estilos encapsulados por componente</li>
            <li><strong>Capa de API:</strong> Funciones serverless para backend</li>
            <li><strong>Diseño del Sistema:</strong> Variables CSS centralizadas</li>
          </ul>
        </div>
      </div>

      <div className="pie-proyecto">
        <a 
          href={proyecto.enlaceGithub} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="enlace-github"
        >
          📚 Ver Código en GitHub
        </a>
      </div>
    </div>
  );
}

export default MiCurriculum;
