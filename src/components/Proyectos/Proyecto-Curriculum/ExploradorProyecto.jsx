import React, { useState } from 'react';
import './ExploradorProyecto.css';
import { 
  FaFolder, 
  FaFolderOpen, 
  FaFileCode, 
  FaFile, 
  FaReact, 
  FaCss3Alt, 
  FaJs, 
  FaHtml5,
  FaCog,
  FaTools,
  FaLightbulb,
  FaSearch,
  FaCode
} from 'react-icons/fa';
// Estructura de archivos del proyecto con información detallada
import estructuraProyecto from './estructuraProyecto';

function ExploradorProyecto({ alVolver }) {
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
  const [carpetasExpandidas, setCarpetasExpandidas] = useState(new Set(['src', 'components']));

  const alternarCarpeta = (rutaCarpeta) => {
    const nuevasExpandidas = new Set(carpetasExpandidas);
    if (nuevasExpandidas.has(rutaCarpeta)) {
      nuevasExpandidas.delete(rutaCarpeta);
    } else {
      nuevasExpandidas.add(rutaCarpeta);
    }
    setCarpetasExpandidas(nuevasExpandidas);
  };

  const obtenerIconoArchivo = (archivo, tipo) => {
    if (tipo === 'folder') return carpetasExpandidas.has(archivo) ? <FaFolderOpen /> : <FaFolder />;
    
    const ext = archivo.split('.').pop();
    switch (ext) {
      case 'jsx': return <FaReact />;
      case 'js': return <FaJs />;
      case 'css': return <FaCss3Alt />;
      case 'html': return <FaHtml5 />;
      case 'json': return <FaCog />;
      default: return <FaFile />;
    }
  };

  const renderizarArbolArchivos = (estructura, ruta = '') => {
    return Object.entries(estructura).map(([nombre, contenido]) => {
      const rutaActual = ruta ? `${ruta}/${nombre}` : nombre;
      
      if (contenido.type) {
        // Es un archivo
        return (
          <div
            key={rutaActual}
            className={`file-item ${archivoSeleccionado === rutaActual ? 'active' : ''}`}
            onClick={() => setArchivoSeleccionado(rutaActual)}
          >
            <span className="file-icon">{contenido.icon}</span>
            <span className="file-name">{nombre}</span>
          </div>
        );
      } else {
        // Es una carpeta
        const estaExpandida = carpetasExpandidas.has(rutaActual);
        return (
          <div key={rutaActual} className="folder-item">
            <div
              className={`folder-header ${estaExpandida ? 'folder-expanded' : ''}`}
              onClick={() => alternarCarpeta(rutaActual)}
            >
              <span className="folder-icon">{obtenerIconoArchivo(rutaActual, 'folder')}</span>
              <span className="file-name">{nombre}</span>
            </div>
            {estaExpandida && (
              <div className="folder-children">
                {renderizarArbolArchivos(contenido, rutaActual)}
              </div>
            )}
          </div>
        );
      }
    });
  };

  const obtenerContenidoArchivoSeleccionado = () => {
    if (!archivoSeleccionado) return null;
    
    const partesRuta = archivoSeleccionado.split('/');
    let actual = estructuraProyecto;
    
    for (const parte of partesRuta) {
      actual = actual[parte];
      if (!actual) return null;
    }
    
    // Manejar tanto 'contenido' como 'content' para compatibilidad
    return actual.contenido || actual.content;
  };

  const renderizarContenido = () => {
    const contenido = obtenerContenidoArchivoSeleccionado();
    
    if (!contenido) {
      return (
        <div className="empty-state">
          <div className="empty-state-icon">
            <FaSearch />
          </div>
          <div className="empty-state-text">Selecciona un archivo</div>
          <div className="empty-state-subtext">
            Haz clic en cualquier archivo del árbol para ver su documentación
          </div>
        </div>
      );
    }

    return (
      <div className="content-body">
        <div className="content-header">
          <div className="content-icon">
            {estructuraProyecto[archivoSeleccionado.split('/')[0]]?.icon || <FaFileCode />}
          </div>
          <h2 className="content-title">{archivoSeleccionado}</h2>
        </div>

        <div className="content-description">
          {contenido.descripcion || contenido.description}
        </div>

        <div className="content-section">
          <h3 className="section-title">
            <span className="section-icon"><FaLightbulb /></span>
            Características Principales
          </h3>
          <ul className="feature-list">
            {(contenido.caracteristicas || contenido.features)?.map((caracteristica, index) => (
              <li key={index} className="feature-item">
                <div className="feature-icon">{caracteristica.icon}</div>
                <div className="feature-content">
                  <div className="feature-title">{caracteristica.titulo || caracteristica.title}</div>
                  <div className="feature-description">{caracteristica.descripcion || caracteristica.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {(contenido.etiquetasTecnologicas || contenido.techTags) && (
          <div className="content-section">
            <h3 className="section-title">
              <span className="section-icon"><FaTools /></span>
              Tecnologías Utilizadas
            </h3>
            <div className="tech-tags">
              {(contenido.etiquetasTecnologicas || contenido.techTags).map((tech, index) => (
                <span 
                  key={index} 
                  className={`tech-tag ${tech.includes('React') ? 'framework' : tech.includes('CSS') ? 'styling' : 'tool'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {(contenido.ejemploCodigo || contenido.codeExample) && (
          <div className="content-section">
            <h3 className="section-title">
              <span className="section-icon"><FaCode /></span>
              Ejemplo de Código
            </h3>
            <div className="code-block">
              <div className="code-header">
                <span className="code-language">
                  {archivoSeleccionado.endsWith('.jsx') ? 'JavaScript (React)' : 
                   archivoSeleccionado.endsWith('.css') ? 'CSS' : 
                   archivoSeleccionado.endsWith('.json') ? 'JSON' : 'JavaScript'}
                </span>
              </div>
              <pre className="code-content">{contenido.ejemploCodigo || contenido.codeExample}</pre>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="explorador-proyecto">
      <div className="encabezado-explorador">
        <button onClick={alVolver} className="boton-cerrar-explorador" title="Cerrar explorador">
          ✕
        </button>
        <h1 className="titulo-explorador">🔍 Explorador del Proyecto</h1>
        <p className="subtitulo-explorador">
          Explora la arquitectura, tecnologías y lógica de desarrollo de este portfolio. 
          Haz clic en cualquier archivo para conocer sus características y implementación.
        </p>
      </div>

      <div className="contenedor-explorador">
        <div className="arbol-archivos">
          <h3 className="titulo-arbol-archivos">📁 Estructura del Proyecto</h3>
          {renderizarArbolArchivos(estructuraProyecto)}
        </div>

        <div className="area-contenido">
          {renderizarContenido()}
        </div>
      </div>
    </div>
  );
}

export default ExploradorProyecto;