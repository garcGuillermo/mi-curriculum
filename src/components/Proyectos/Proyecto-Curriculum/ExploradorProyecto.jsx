import React, { useState } from 'react';
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
  FaServer,
  FaCodeBranch,
  FaTools,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaMobile,
  FaSearch,
  FaCode
} from 'react-icons/fa';
import { SiVite, SiNodedotjs, SiEslint, SiVercel } from 'react-icons/si';
import './ExploradorProyecto.css';

// Estructura de archivos del proyecto con información detallada
const estructuraProyecto = {
  'package.json': {
    type: 'config',
    icon: <FaCog />,
    description: 'Configuración del proyecto y gestión de dependencias',
    contenido: {
      titulo: 'Configuración del Proyecto',
      descripcion: 'Archivo central que define las dependencias, scripts y metadatos del proyecto React.',
      caracteristicas: [
        {
          icon: <FaReact />,
          titulo: 'Framework Principal',
          descripcion: 'React 19.1.0 como biblioteca principal para la interfaz de usuario'
        },
        {
          icon: <FaCodeBranch />,
          titulo: 'Enrutamiento',
          descripcion: 'React Router DOM para navegación SPA (Single Page Application)'
        },
        {
          icon: <SiVite />,
          titulo: 'Build Tool',
          descripcion: 'Vite como herramienta de desarrollo y construcción ultra-rápida'
        },
        {
          icon: <FaServer />,
          titulo: 'Backend',
          descripcion: 'Nodemailer para funcionalidad de envío de emails'
        }
      ],
      etiquetasTecnologicas: ['React', 'Vite', 'React Router', 'Nodemailer'],
      ejemploCodigo: `{
  "name": "mi-curriculum",
  "type": "module",
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.7.1",
    "nodemailer": "^7.0.5"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}`
    }
  },
  'vite.config.js': {
    type: 'config',
    icon: <SiVite />,
    description: 'Configuración de Vite para desarrollo y construcción',
    contenido: {
      titulo: 'Configuración de Vite',
      descripcion: 'Herramienta de build moderna que proporciona desarrollo ultra-rápido con Hot Module Replacement.',
      caracteristicas: [
        {
          icon: <FaRocket />,
          titulo: 'Desarrollo Rápido',
          descripcion: 'HMR instantáneo para React, actualizaciones en tiempo real'
        },
        {
          icon: <FaTools />,
          titulo: 'Plugin React',
          descripcion: 'Soporte completo para JSX, hooks y React DevTools'
        }
      ],
      etiquetasTecnologicas: ['Vite', 'React Plugin']
    }
  },
  'eslint.config.js': {
    type: 'config',
    icon: <SiEslint />,
    description: 'Configuración de ESLint para calidad de código',
    contenido: {
      titulo: 'Linting y Calidad de Código',
      descripcion: 'ESLint configurado con reglas específicas para React y mejores prácticas de JavaScript.',
      caracteristicas: [
        {
          icon: <FaShieldAlt />,
          titulo: 'Reglas de React',
          descripcion: 'React Hooks rules y React Refresh para desarrollo'
        },
        {
          icon: <FaCode />,
          titulo: 'ES2020 Support',
          descripcion: 'Soporte para características modernas de JavaScript'
        }
      ],
      etiquetasTecnologicas: ['ESLint', 'React Rules']
    }
  },
  'index.html': {
    type: 'html',
    icon: <FaHtml5 />,
    description: 'Punto de entrada HTML del SPA',
    contenido: {
      titulo: 'Documento HTML Base',
      descripcion: 'Estructura HTML mínima donde se monta la aplicación React.',
      caracteristicas: [
        {
          icon: <FaReact />,
          titulo: 'Root Element',
          descripcion: 'Contenedor #root donde React renderiza la aplicación'
        },
        {
          icon: <FaMobile />,
          titulo: 'Responsive Meta',
          descripcion: 'Viewport configurado para diseño responsivo'
        }
      ],
      etiquetasTecnologicas: ['HTML5', 'SPA']
    }
  },
  'src': {
    'main.jsx': {
      type: 'js',
      icon: <FaReact />,
      description: 'Punto de entrada de React',
      content: {
        title: 'Bootstrap de la Aplicación',
        description: 'Inicializa React, configura el router y monta la aplicación en el DOM.',
        features: [
          {
            icon: <FaReact />,
            title: 'React Strict Mode',
            description: 'Modo estricto para detectar problemas potenciales'
          },
          {
            icon: <FaCodeBranch />,
            title: 'BrowserRouter',
            description: 'Configuración del enrutamiento para SPA'
          }
        ],
        techTags: ['React', 'React DOM', 'React Router'],
        codeExample: `import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);`
      }
    },
    'App.jsx': {
      type: 'js',
      icon: <FaReact />,
      description: 'Componente raíz y gestión de estado principal',
      content: {
        title: 'Arquitectura Principal',
        description: 'Componente central que maneja el estado global, enrutamiento y lógica de navegación.',
        features: [
          {
            icon: <FaCodeBranch />,
            title: 'Sistema de Rutas',
            description: 'React Router con rutas dinámicas para cada sección del CV'
          },
          {
            icon: <FaLightbulb />,
            title: 'Estado Inteligente',
            description: 'Gestión del toggle de bienvenida con lógica de auto-ocultación'
          },
          {
            icon: <FaMobile />,
            title: 'Scroll Management',
            description: 'Control del scroll suave para navegación fluida'
          }
        ],
        techTags: ['React Hooks', 'React Router', 'State Management'],
        codeExample: `const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

// Auto-ocultar bienvenida al navegar
useEffect(() => {
  if (location.pathname !== '/') {
    setMostrarBienvenida(false);
  }
  prevPathname.current = location.pathname;
}, [location.pathname]);`
      }
    },
    'Variables.css': {
      type: 'css',
      icon: <FaCss3Alt />,
      description: 'Sistema de variables CSS globales',
      content: {
        title: 'Design System',
        description: 'Variables CSS personalizadas que definen el sistema de diseño completo del proyecto.',
        features: [
          {
            icon: <FaCss3Alt />,
            title: 'Color Palette',
            description: 'Paleta de colores consistente con modo claro/oscuro'
          },
          {
            icon: <FaTools />,
            title: 'Typography Scale',
            description: 'Sistema tipográfico escalable y consistente'
          },
          {
            icon: <FaMobile />,
            title: 'Responsive Values',
            description: 'Breakpoints y espaciados para diseño responsivo'
          }
        ],
        techTags: ['CSS Variables', 'Design System', 'Responsive']
      }
    },
    'components': {
      'NavegacionLateral': {
        'NavegacionLateral.jsx': {
          type: 'js',
          icon: <FaReact />,
          description: 'Componente de navegación lateral',
          content: {
            title: 'Sistema de Navegación',
            description: 'Sidebar fijo con información personal, menú de navegación y enlaces de contacto.',
            features: [
              {
                icon: <FaCodeBranch />,
                title: 'React Router Links',
                description: 'Navegación SPA con Link components y useLocation hook'
              },
              {
                icon: <FaReact />,
                title: 'React Icons',
                description: 'Iconografía consistente con Material Design y Font Awesome'
              },
              {
                icon: <FaMobile />,
                title: 'Responsive Design',
                description: 'Adaptación automática a diferentes tamaños de pantalla'
              }
            ],
            techTags: ['React Router', 'React Icons', 'CSS Grid'],
            codeExample: `const seccionesCV = [
  { id: 'sobre-mi', nombre: 'Sobre Mí', path: '/sobre-mi' },
  { id: 'estudios', nombre: 'Estudios', path: '/estudios' },
  // ...más secciones
];

{seccionesCV.map(seccion => (
  <li key={seccion.id}>
    <Link to={seccion.path}>{seccion.nombre}</Link>
  </li>
))}`
          }
        },
        'NavegacionLateral.css': {
          type: 'css',
          icon: <FaCss3Alt />,
          description: 'Estilos del componente de navegación',
          content: {
            title: 'Estilos de Navegación',
            description: 'CSS optimizado para el sidebar con efectos hover, estados activos y diseño responsivo.',
            features: [
              {
                icon: <FaCss3Alt />,
                title: 'Sticky Position',
                description: 'Posicionamiento fijo que se adapta al scroll'
              },
              {
                icon: <FaLightbulb />,
                title: 'Hover Effects',
                description: 'Transiciones suaves y efectos visuales en interacciones'
              },
              {
                icon: <FaMobile />,
                title: 'Media Queries',
                description: 'Breakpoints para móvil, tablet y desktop'
              }
            ],
            techTags: ['CSS Grid', 'Flexbox', 'Transitions', 'Media Queries']
          }
        }
      },
      'Bienvenida': {
        'Bienvenida.jsx': {
          type: 'js',
          icon: <FaReact />,
          description: 'Componente de mensaje de bienvenida',
          content: {
            title: 'Sistema de Bienvenida',
            description: 'Componente interactivo con toggle que presenta el proyecto y guía al usuario.',
            features: [
              {
                icon: <FaReact />,
                title: 'Controlled Component',
                description: 'Estado controlado desde App.jsx con props de control'
              },
              {
                icon: <FaLightbulb />,
                title: 'Toggle Interaction',
                description: 'Botón de show/hide con estados visuales y aria-labels'
              },
              {
                icon: <FaTools />,
                title: 'Tech Showcase',
                description: 'Display dinámico de tecnologías usadas con iconos'
              }
            ],
            techTags: ['React Props', 'Conditional Rendering', 'Accessibility'],
            codeExample: `function Bienvenida({ onToggle, estaVisible }) {
  return (
    <section className={\`bienvenida-interactiva \${estaVisible ? '' : 'bienvenida-replegada'}\`}>
      <div className="bienvenida-contenido">
        {/* Contenido principal */}
      </div>
      <button onClick={onToggle} aria-label={estaVisible ? "Ocultar" : "Mostrar"}>
        {estaVisible ? '▲' : '▼'}
      </button>
    </section>
  );
}`
          }
        }
      },
      'SobreMi': {
        'SobreMi.jsx': {
          type: 'js',
          icon: <FaReact />,
          description: 'Sección de información personal',
          content: {
            title: 'Presentación Personal',
            description: 'Componente estático que presenta información personal, trayectoria y objetivos profesionales.',
            features: [
              {
                icon: <FaReact />,
                title: 'Functional Component',
                description: 'Componente funcional simple sin estado interno'
              },
              {
                icon: <FaCss3Alt />,
                title: 'Semantic HTML',
                description: 'Estructura semántica con sections, headings y listas'
              },
              {
                icon: <FaLightbulb />,
                title: 'Highlighted Text',
                description: 'Elementos destacados con clases CSS específicas'
              }
            ],
            techTags: ['React', 'Semantic HTML', 'CSS Classes']
          }
        }
      },
      'Experiencia': {
        'Experiencia.jsx': {
          type: 'js',
          icon: <FaReact />,
          description: 'Timeline de experiencia laboral',
          content: {
            title: 'Timeline Profesional',
            description: 'Componente que renderiza la experiencia laboral en formato timeline con datos estructurados.',
            features: [
              {
                icon: <FaReact />,
                title: 'Data Mapping',
                description: 'Array de objetos mapeado dinámicamente con .map()'
              },
              {
                icon: <FaLightbulb />,
                title: 'Timeline Design',
                description: 'Diseño de línea temporal visual con CSS Grid/Flexbox'
              },
              {
                icon: <FaCode />,
                title: 'Structured Data',
                description: 'Datos organizados en objetos con empresa, período, cargo'
              }
            ],
            techTags: ['React Rendering', 'Array Methods', 'Data Structure'],
            codeExample: `const experienciaLaboral = [
  {
    empresa: "FoundEver",
    periodo: "2024 - 2025",
    cargo: "Teleoperador",
    descripcion: [
      "Gestión de ventas y atención al cliente.",
      "Manejo de sistemas CRM..."
    ]
  }
];

{experienciaLaboral.map((job, index) => (
  <div key={index} className="experiencia-item">
    <h3>{job.cargo}</h3>
    <h4>{job.empresa}</h4>
    {/* ...más contenido */}
  </div>
))}`
          }
        }
      },
      'Estudios': {
        'Estudios.jsx': {
          type: 'js',
          icon: <FaReact />,
          description: 'Sección de formación académica',
          content: {
            title: 'Formación Académica',
            description: 'Componente interactivo con acordeón que muestra estudios y certificaciones.',
            features: [
              {
                icon: <FaReact />,
                title: 'useState Hook',
                description: 'Estado local para controlar acordeones expandidos'
              },
              {
                icon: <FaLightbulb />,
                title: 'Accordion UI',
                description: 'Interfaz de acordeón con animaciones CSS'
              },
              {
                icon: <FaTools />,
                title: 'Dynamic IDs',
                description: 'IDs dinámicos para accesibilidad y aria-controls'
              }
            ],
            techTags: ['React Hooks', 'Interactive UI', 'Accessibility'],
            codeExample: `const [openItemId, setOpenItemId] = useState(null);

const toggleItem = (id) => {
  setOpenItemId(openItemId === id ? null : id);
};

<button 
  onClick={() => toggleItem(estudio.id)}
  aria-expanded={openItemId === estudio.id}
  aria-controls={\`detalles-\${estudio.id}\`}
>
  {estudio.titulo}
</button>`
          }
        }
      },
      'Proyectos': {
        'Proyectos.jsx': {
          type: 'js',
          icon: <FaReact />,
          description: 'Grid de proyectos con navegación',
          content: {
            title: 'Showcase de Proyectos',
            description: 'Componente que maneja la visualización de proyectos con navegación condicional.',
            features: [
              {
                icon: <FaReact />,
                title: 'Conditional Rendering',
                description: 'Renderizado condicional entre lista y detalles de proyecto'
              },
              {
                icon: <FaCodeBranch />,
                title: 'Component Routing',
                description: 'Navegación interna entre componentes sin React Router'
              },
              {
                icon: <FaLightbulb />,
                title: 'State Management',
                description: 'Estado local para proyecto seleccionado'
              }
            ],
            techTags: ['React State', 'Conditional Rendering', 'Component Composition']
          }
        },
        'MiCurriculum.jsx': {
          type: 'js',
          icon: <FaReact />,
          description: 'Detalles del proyecto actual',
          content: {
            title: 'Meta-Proyecto',
            description: 'Componente que documenta el propio proyecto de curriculum, creando una referencia recursiva.',
            features: [
              {
                icon: <FaReact />,
                title: 'Self-Reference',
                description: 'El proyecto se documenta a sí mismo'
              },
              {
                icon: <FaCodeBranch />,
                title: 'Export Pattern',
                description: 'Exporta tanto el componente como los datos'
              }
            ],
            techTags: ['React', 'Module Exports', 'Meta-Programming']
          }
        }
      },
      'Contacto': {
        'Contacto.jsx': {
          type: 'js',
          icon: <FaReact />,
          description: 'Formulario de contacto funcional',
          content: {
            title: 'Sistema de Contacto',
            description: 'Formulario completo con validación, estado y integración con API backend.',
            features: [
              {
                icon: <FaReact />,
                title: 'Form State Management',
                description: 'useState para datos del formulario y estados de envío'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Client Validation',
                description: 'Validación en tiempo real y feedback visual'
              },
              {
                icon: <FaServer />,
                title: 'API Integration',
                description: 'Fetch API para comunicación con serverless function'
              },
              {
                icon: <FaLightbulb />,
                title: 'UX States',
                description: 'Estados de loading, success y error con feedback visual'
              }
            ],
            techTags: ['React Forms', 'Fetch API', 'Validation', 'UX States'],
            codeExample: `const [formData, setFormData] = useState({
  nombre: '', email: '', mensaje: ''
});
const [enviando, setEnviando] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setEnviando(true);
  
  try {
    const response = await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    // Manejar respuesta...
  } catch (error) {
    // Manejar error...
  }
};`
          }
        }
      }
    }
  },
  'api': {
    'contacto.js': {
      type: 'js',
      icon: <SiVercel />,
      description: 'Serverless function para emails',
      content: {
        title: 'API Serverless',
        description: 'Función serverless de Vercel que maneja el envío de emails con seguridad y validaciones avanzadas.',
        features: [
          {
            icon: <SiNodedotjs />,
            title: 'Node.js Runtime',
            description: 'Función serverless ejecutada en runtime de Node.js'
          },
          {
            icon: <FaServer />,
            title: 'Nodemailer Integration',
            description: 'Integración con Gmail SMTP para envío de emails'
          },
          {
            icon: <FaShieldAlt />,
            title: 'Security Features',
            description: 'Rate limiting, validación de entrada, sanitización XSS'
          },
          {
            icon: <FaTools />,
            title: 'Error Handling',
            description: 'Manejo robusto de errores con logging detallado'
          },
          {
            icon: <FaLightbulb />,
            title: 'CORS Configuration',
            description: 'CORS configurado para orígenes específicos'
          }
        ],
        techTags: ['Vercel Functions', 'Nodemailer', 'Security', 'Rate Limiting'],
        codeExample: `// Rate limiting implementation
const checkRateLimit = (ip) => {
  const now = Date.now();
  const userRequests = requests.get(ip) || [];
  const recentRequests = userRequests.filter(
    timestamp => now - timestamp < TIME_WINDOW
  );
  
  if (recentRequests.length >= RATE_LIMIT) {
    return false;
  }
  
  recentRequests.push(now);
  requests.set(ip, recentRequests);
  return true;
};

// Email validation
const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const validationErrors = validateInput(name, email, message);`
      }
    }
  }
};

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
