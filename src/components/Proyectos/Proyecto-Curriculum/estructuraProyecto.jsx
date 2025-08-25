import { 
  FaFolder, 
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
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.7.1",
    "resend": "^3.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.6.0",
    "eslint": "^9.30.1",
    "vite": "^7.0.4"
  }
}`
    }
  },
  'package-lock.json': {
    type: 'config',
    icon: <FaCog />,
    description: 'Lockfile de dependencias de npm',
    contenido: {
      titulo: 'Gestión de Dependencias',
      descripcion: 'Archivo de bloqueo que garantiza instalaciones consistentes de dependencias en todos los entornos.',
      caracteristicas: [
        {
          icon: <FaShieldAlt />,
          titulo: 'Versiones Exactas',
          descripcion: 'Bloquea versiones específicas de todas las dependencias y subdependencias'
        },
        {
          icon: <FaRocket />,
          titulo: 'Instalación Rápida',
          descripcion: 'Acelera npm install al tener información precalculada'
        },
        {
          icon: <FaTools />,
          titulo: 'Integridad de Paquetes',
          descripcion: 'Checksums SHA para verificar la integridad de los paquetes'
        },
        {
          icon: <FaCodeBranch />,
          titulo: 'Reproducibilidad',
          descripcion: 'Garantiza que todos los desarrolladores tengan las mismas versiones'
        }
      ],
      ejemploCodigo: `{
  "name": "mi-curriculum",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "mi-curriculum",
      "dependencies": {
        "react": "^19.1.0",
        "react-dom": "^19.1.0",
        "react-router-dom": "^7.7.1",
        "react-icons": "^5.4.0"
      },
      "devDependencies": {
        "@vitejs/plugin-react": "^4.3.4",
        "vite": "^6.0.9"
      }
    },
    "node_modules/react": {
      "version": "19.1.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.1.0.tgz",
      "integrity": "sha512-...",
      "engines": {
        "node": ">=0.10.0"
      }
    }
  }
}`,
      etiquetasTecnologicas: ['npm', 'Dependencies', 'Lockfile', 'Security']
    }
  },
  'README.md': {
    type: 'documentation',
    icon: <FaFile />,
    description: 'Documentación principal del proyecto',
    contenido: {
      titulo: 'Documentación del Proyecto',
      descripcion: 'Archivo de documentación que explica el propósito, instalación y uso del portfolio web.',
      caracteristicas: [
        {
          icon: <FaLightbulb />,
          titulo: 'Descripción del Proyecto',
          descripcion: 'Portfolio personal desarrollado en React con diseño responsivo'
        },
        {
          icon: <FaRocket />,
          titulo: 'Tecnologías Utilizadas',
          descripcion: 'React, Vite, React Router, React Icons y CSS moderno'
        },
        {
          icon: <FaCog />,
          titulo: 'Instrucciones de Instalación',
          descripcion: 'Comandos npm para instalar dependencias y ejecutar el proyecto'
        },
        {
          icon: <SiVercel />,
          titulo: 'Despliegue',
          descripcion: 'Configurado para despliegue automático en Vercel'
        }
      ],
      ejemploCodigo: `# Mi Portfolio - Guillermo García Inurria

Portfolio personal desarrollado con React y Vite, presentando mi experiencia como Desarrollador Frontend y Técnico ASIR.

## 🚀 Tecnologías

- **React 19.1.0** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de desarrollo y construcción
- **React Router** - Navegación SPA
- **React Icons** - Iconografía moderna
- **CSS Moderno** - Variables CSS y diseño responsivo

## 📦 Instalación

\\\`\\\`\\\`bash
npm install
npm run dev
\\\`\\\`\\\`

## 🌐 Despliegue

Desplegado en Vercel con integración continua desde GitHub.`,
      etiquetasTecnologicas: ['React', 'Vite', 'Vercel', 'Portfolio']
    }
  },
  'vercel.json': {
    type: 'config',
    icon: <SiVercel />,
    description: 'Configuración de despliegue para Vercel',
    contenido: {
      titulo: 'Configuración de Vercel',
      descripcion: 'Archivo de configuración para el despliegue en Vercel, optimizado para aplicaciones React SPA.',
      caracteristicas: [
        {
          icon: <FaRocket />,
          titulo: 'SPA Routing',
          descripcion: 'Configuración de rewrites para React Router en aplicaciones SPA'
        },
        {
          icon: <FaServer />,
          titulo: 'Funciones Serverless',
          descripcion: 'Configuración para funciones API en la carpeta /api'
        },
        {
          icon: <FaShieldAlt />,
          titulo: 'Headers de Seguridad',
          descripcion: 'Headers HTTP seguros para protección del contenido'
        },
        {
          icon: <FaMobile />,
          titulo: 'Optimización de Assets',
          descripcion: 'Configuración optimizada para carga rápida en todos los dispositivos'
        }
      ],
      ejemploCodigo: `{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}`,
      etiquetasTecnologicas: ['Vercel', 'SPA', 'Deployment', 'Security']
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
        ejemploCodigo: `import React from 'react';
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
        ejemploCodigo: `import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavegacionLateral from './components/NavegacionLateral/NavegacionLateral';
import Bienvenida from './components/Bienvenida/Bienvenida';

function App() {
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);
  const [bienvenidaManipuladaManualmente, setBienvenidaManipuladaManualmente] = useState(false);
  const location = useLocation();

  // Auto-ocultar bienvenida al navegar
  useEffect(() => {
    if (location.pathname !== '/') {
      setMostrarBienvenida(false);
    }
    prevPathname.current = location.pathname;
  }, [location.pathname]);

  const toggleBienvenida = () => {
    setMostrarBienvenida(prev => !prev);
    setBienvenidaManipuladaManualmente(true);
  };

  return (
    <div className="app">
      <NavegacionLateral 
        mostrarBienvenida={mostrarBienvenida}
        onToggleBienvenida={toggleBienvenida}
      />
      <main className="contenido-principal">
        {mostrarBienvenida && <Bienvenida />}
        <Routes>
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}`
      }
    },
    'App.css': {
      type: 'css',
      icon: <FaCss3Alt />,
      description: 'Estilos principales del componente App',
      content: {
        title: 'Estilos de Aplicación Principal',
        description: 'Estilos CSS que definen el layout principal y la estructura visual de toda la aplicación.',
        features: [
          {
            icon: <FaCss3Alt />,
            title: 'Layout Principal',
            description: 'Estructura de grid principal para navbar lateral y contenido'
          },
          {
            icon: <FaMobile />,
            title: 'Diseño Responsivo',
            description: 'Adaptación del layout para diferentes tamaños de pantalla'
          },
          {
            icon: <FaRocket />,
            title: 'Animaciones de Transición',
            descripcion: 'Transiciones suaves entre secciones y estados'
          },
          {
            icon: <FaShieldAlt />,
            titulo: 'Scrollbar Personalizada',
            descripcion: 'Estilos personalizados para scrollbars en navegadores webkit'
          }
        ],
        ejemploCodigo: `/* LAYOUT PRINCIPAL */
.app {
  display: grid;
  grid-template-columns: var(--nav-width-desktop) 1fr;
  min-height: 100vh;
  background: var(--color-background);
}

/* CONTENIDO PRINCIPAL */
.contenido-principal {
  padding: var(--spacing-xl);
  overflow-y: auto;
  position: relative;
}

/* RESPONSIVE - MÓVIL */
@media (max-width: 1050px) {
  .app {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
  
  .contenido-principal {
    padding: var(--spacing-lg);
  }
}

/* SCROLLBAR PERSONALIZADA */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-background-light);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}`,
        etiquetasTecnologicas: ['CSS', 'Layout', 'Responsive', 'Variables']
      }
    },
    'index.css': {
      type: 'css',
      icon: <FaCss3Alt />,
      description: 'Estilos base y normalización CSS global',
      content: {
        title: 'CSS Global y Normalización',
        description: 'Estilos base que normalizan el comportamiento del navegador y establecen fundamentos del diseño.',
        features: [
          {
            icon: <FaCss3Alt />,
            title: 'CSS Reset',
            description: 'Normalización de estilos entre navegadores para consistencia'
          },
          {
            icon: <FaSearch />,
            title: 'Tipografía Base',
            description: 'Configuración de fuentes y estilos tipográficos globales'
          },
          {
            icon: <FaMobile />,
            title: 'Responsive Foundation',
            description: 'Base responsiva con viewport y media queries'
          },
          {
            icon: <FaShieldAlt />,
            title: 'Accesibilidad',
            description: 'Estilos base para mejorar la accesibilidad web'
          }
        ],
        ejemploCodigo: `/* RESETEO GLOBAL */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden; /* Evita el scroll horizontal no deseado */
}

/* HERENCIA DE BOX-SIZING */
*, *::before, *::after {
  box-sizing: inherit;
}

/* ROOT DE REACT */
#root {
  width: 100%;
  height: 100%;
}`,
        etiquetasTecnologicas: ['CSS', 'Reset', 'Accessibility', 'Responsive']
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
        techTags: ['CSS Variables', 'Design System', 'Responsive'],
        ejemploCodigo: `:root {
  /* COLORES PRINCIPALES */
  --color-primary: #1a2f3f;    /* Azul muy oscuro, casi negro */
  --color-secondary: #2c4a3f;  /* Verde oscuro */
  --color-accent: #00916e;     /* Verde esmeralda */
  --color-accent-dark: #00725a;/* Verde esmeralda más oscuro */
  
  /* COLORES DE FONDO */
  --color-background: #f5f7f6; /* Gris verdoso muy claro */
  --color-white: #ffffff;
  
  /* COLORES DE TEXTO */
  --color-text: #2d3436;       /* Gris muy oscuro */
  --color-text-light: #f0f7f4; /* Blanco verdoso */
  --color-text-muted: #98a4a3; /* Gris medio con toque verdoso */
  
  /* COLORES DE BORDES Y DIVISORES */
  --color-border: #e8eeec;     /* Gris verdoso claro */
  --color-border-light: rgba(255, 255, 255, 0.1);
  
  /* SISTEMA DE ESPACIADO */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;

  /* TIPOGRAFÍA */
  --font-primary: 'Poppins', sans-serif;
  --font-secondary: 'Montserrat', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}`
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
            ejemploCodigo: `import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavegacionLateral.css';

/**
 * COMPONENTE: NavegacionLateral
 * Sidebar de navegación con información del perfil y enlaces de contacto.
 * Utiliza forwardRef para permitir control del scroll desde componentes padre.
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
              <Link 
                to={seccion.path}
                className={location.pathname === seccion.path ? 'active' : ''}
              >
                {seccion.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});`
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
            techTags: ['CSS Grid', 'Flexbox', 'Transitions', 'Media Queries'],
            ejemploCodigo: `/* VARIABLES - NAVEGACIÓN LATERAL */
:root {
  --nav-width-base: 25%;
  --nav-width-tablet-lg: 30%;
  --nav-width-tablet-md: 32%;
  --nav-position-top: 20px;
  --nav-position-left: 20px;
  --nav-border-radius: 16px;
  --nav-z-index: 1000;
  
  /* Foto de perfil */
  --foto-size-base: 150px;
  --foto-size-tablet-lg: 130px;
  --foto-border-width: 4px;
  --foto-hover-scale: 1.08;
}

/* NAVEGACIÓN LATERAL PRINCIPAL */
.navegacion-lateral {
  position: fixed;
  top: var(--nav-position-top);
  left: var(--nav-position-left);
  width: var(--nav-width-base);
  height: calc(100vh - calc(var(--nav-position-top) * 2));
  background: linear-gradient(145deg, var(--color-primary), var(--color-secondary));
  font-family: var(--font-primary);
  font-size: var(--font-size-xs);
  border-radius: var(--nav-border-radius);
  box-shadow: var(--nav-main-shadow);
  display: flex;
  flex-direction: column;
  padding: var(--nav-padding-base);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: var(--nav-z-index);
}

/* PERFIL FOTO */
.perfil-foto-lateral {
  width: var(--foto-size-base);
  height: var(--foto-size-base);
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--foto-main-shadow);
  transition: var(--nav-transition-transform);
  cursor: pointer;
}

.perfil-foto-lateral:hover {
  transform: scale(var(--foto-hover-scale));
}`
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
            ejemploCodigo: `import React from 'react';
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
  { nombre: 'Git', icono: <FaGitAlt className="tecnologia-icono" /> }
];

function Bienvenida({ onToggle, estaVisible }) {
  return (
    <section 
      id="bienvenida" 
      className={\`seccion-cv bienvenida-interactiva \${estaVisible ? '' : 'bienvenida-replegada'}\`}
    >
      <div className="bienvenida-contenido">
        <h1>¡Bienvenid@ a mi Currículum Online!</h1>
        <p>
          Me alegra que estés aquí. He creado esta plataforma interactiva donde podrás explorar
          mi perfil profesional, experiencia, formación y habilidades.
        </p>
        
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
    </section>
  );
}`
          }
        },
        'Bienvenida.css': {
          type: 'css',
          icon: <FaCss3Alt />,
          description: 'Estilos del componente de bienvenida interactiva',
          content: {
            title: 'Estilos de Bienvenida Interactiva',
            description: 'CSS para la sección de bienvenida con animaciones, efectos visuales y diseño responsivo.',
            features: [
              {
                icon: <FaRocket />,
                title: 'Animaciones CSS',
                description: 'Transiciones suaves para mostrar/ocultar contenido'
              },
              {
                icon: <FaMobile />,
                title: 'Responsive Design',
                description: 'Adaptación completa para dispositivos móviles'
              },
              {
                icon: <FaLightbulb />,
                title: 'Efectos Visuales',
                description: 'Gradientes, sombras y efectos hover interactivos'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Accesibilidad',
                description: 'Soporte para usuarios con preferencias de movimiento reducido'
              }
            ],
            ejemploCodigo: `/* VARIABLES PERSONALIZADAS */
:root {
  --bienvenida-padding-x: var(--spacing-lg);
  --bienvenida-padding-bottom: var(--spacing-3xl);
  --bienvenida-border-radius: var(--border-radius-lg);
  --bienvenida-max-height: 2000px;
  --tecnologia-gap: 8px;
  --tecnologia-icon-size: var(--font-size-2xl);
}

/* CONTENEDOR PRINCIPAL */
.bienvenida-interactiva {
  position: relative;
  padding: var(--spacing-sm) var(--bienvenida-padding-x) var(--bienvenida-padding-bottom);
  border-bottom: 1px solid var(--color-border);
  margin: 0 auto var(--spacing-3xl) auto;
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.4s ease-in-out;
  background-color: var(--color-white);
  border-radius: var(--bienvenida-border-radius);
  box-shadow: 0 8px 16px var(--shadow-color);
  text-align: center;
  max-height: var(--bienvenida-max-height);
}

/* ESTADO REPLEGADO */
.bienvenida-interactiva.bienvenida-replegada {
  max-height: 60px;
  padding: var(--spacing-sm) var(--bienvenida-padding-x) var(--spacing-sm);
  margin: 0 auto 0 auto;
  border-bottom: none;
  background-color: transparent;
  box-shadow: none;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.3s ease-in-out;
}

/* CONTENIDO PRINCIPAL */
.bienvenida-contenido {
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
  padding: 0;
  margin: 0;
}`,
            etiquetasTecnologicas: ['CSS', 'Animations', 'Responsive', 'Accessibility']
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
            techTags: ['React', 'Semantic HTML', 'CSS Classes'],
            ejemploCodigo: `import React, { useState } from 'react';
import './SobreMi.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

// Array de iconos de tecnologías (sin IAs)
const iconosTecnologias = [
  FaHtml5,
  FaCss3Alt, 
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  SiVite
];

// Función para obtener un icono aleatorio
const obtenerIconoAleatorio = () => {
  return iconosTecnologias[Math.floor(Math.random() * iconosTecnologias.length)];
};

function SobreMi() {
  const [pantallaActual, setPantallaActual] = useState(0);
  const [pantallaSaliente, setPantallaSaliente] = useState(null);
  const [estaTransicionando, setEstaTransicionando] = useState(false);
  const [direccionTransicion, setDireccionTransicion] = useState('');

  // Generar iconos aleatorios una sola vez al montar el componente
  const [iconosGenerados] = useState(() => {
    return Array.from({ length: 5 }, () => obtenerIconoAleatorio());
  });

  const pantallas = [
    {
      titulo: "Presentación",
      iconoFondo: iconosGenerados[0],
      contenido: (
        <div>
          <h2>¡Hola!</h2>
          <p>
            Me llamo Guillermo y soy técnico superior en <span className="resaltado">Administración de Sistemas Informáticos en 
            Red (ASIR)</span> y como tal adquirí una sólida base en <span className="resaltado">redes y sistemas.</span>
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="sobre-mi">
      {/* Contenido de las pantallas */}
    </section>
  );
}`
          }
        },
        'SobreMi.css': {
          type: 'css',
          icon: <FaCss3Alt />,
          description: 'Estilos para la sección de información personal',
          content: {
            title: 'Estilos de Presentación Personal',
            description: 'CSS para la sección Sobre Mí con tipografía elegante, espaciado y elementos destacados.',
            features: [
              {
                icon: <FaCss3Alt />,
                title: 'Tipografía Jerárquica',
                description: 'Sistema de tamaños y pesos de fuente bien estructurado'
              },
              {
                icon: <FaLightbulb />,
                title: 'Elementos Destacados',
                description: 'Clases CSS para resaltar información importante'
              },
              {
                icon: <FaMobile />,
                title: 'Diseño Responsivo',
                description: 'Adaptación de espaciado y tipografía para móviles'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Legibilidad Optimizada',
                description: 'Interlineado y espaciado optimizados para lectura'
              }
            ],
            ejemploCodigo: `/* CONTENEDOR PRINCIPAL */
.sobre-mi {
  background: var(--color-background-card);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-2xl);
  margin-bottom: var(--spacing-xl);
  box-shadow: var(--shadow-md);
}

/* TIPOGRAFÍA */
.sobre-mi h2 {
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-bold);
}

/* ELEMENTOS DESTACADOS */
.destacado {
  color: var(--color-accent);
  font-weight: var(--font-weight-semibold);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .sobre-mi {
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }
  
  .sobre-mi h2 {
    font-size: var(--font-size-xl);
  }
}`,
            etiquetasTecnologicas: ['CSS', 'Typography', 'Responsive', 'Readability']
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
            ejemploCodigo: `import React from 'react';
import './Experiencia.css';

// Array de experiencia laboral y profesional
const experienciaLaboral = [
  {
    empresa: "FoundEver",
    periodo: "2024 - 2025",
    cargo: "Teleoperador",
    descripcion: [
      "Gestión de ventas y atención al cliente.",
      "Manejo de sistemas CRM y bases de datos. Uso de programas informáticos como Siebel 8.",
    ],
  },
  {
    empresa: "BURGER KING SPAIN",
    periodo: "2021 - 2024",
    cargo: "Empleado Experto",
    descripcion: [
      "Manejo de sistemas de punto de venta (POS) y supervisión de procesos de compra.",
      "Colaboración efectiva con equipos de trabajo en un entorno de alta demanda."
    ],
  },
  {
    empresa: "DIPUTACIÓN DE SEVILLA",
    periodo: "2019 - 2020",
    cargo: "Técnico de Microinformática",
    descripcion: [
      "Responsable especializado en mantenimiento del hardware y red de empleados.",
      "Gestión y solución de incidencias.",
    ],
  }
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="seccion-cv">
      <h1>Experiencia Profesional</h1>
      <div className="experiencia-lista">
        {experienciaLaboral.map((job, index) => (
          <div key={index} className="experiencia-item">
            <h3>{job.cargo}</h3>
            <h4>{job.empresa}</h4>
            <span className="periodo">{job.periodo}</span>
            <ul>
              {job.descripcion.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};`
          }
        },
        'Experiencia.css': {
          type: 'css',
          icon: <FaCss3Alt />,
          description: 'Estilos para el timeline de experiencia laboral',
          content: {
            title: 'Timeline de Experiencia Profesional',
            description: 'CSS para el componente de experiencia con diseño de timeline, iconos y animaciones.',
            features: [
              {
                icon: <FaRocket />,
                title: 'Timeline Visual',
                description: 'Línea temporal vertical con conectores y puntos de referencia'
              },
              {
                icon: <FaLightbulb />,
                title: 'Iconos de Verificación',
                description: 'Iconos check con animaciones y colores temáticos'
              },
              {
                icon: <FaMobile />,
                title: 'Adaptación Móvil',
                description: 'Timeline simplificado y espaciado optimizado para móviles'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Hover Effects',
                description: 'Efectos interactivos y transiciones suaves'
              }
            ],
            ejemploCodigo: `.experiencia-lista {
  display: flex;
  flex-direction: column;
  gap: var(--experiencia-gap);
  padding-left: var(--experiencia-padding);
  position: relative;
}

.experiencia-lista::before {
  content: '';
  position: absolute;
  top: 0;
  left: var(--timeline-offset);
  height: 100%;
  width: var(--timeline-width);
  background-color: var(--color-border);
  z-index: 1;
}`,
            etiquetasTecnologicas: ['CSS', 'Timeline', 'Icons', 'Responsive']
          }
        },
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
              ejemploCodigo: `import React, { useState } from 'react';
import './Estudios.css';

// Array de estudios y formación académmica
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
    id: 'asir',
    titulo: "Técnico Superior de Administración de Sistemas Informáticos en Red (ASIR)",
    centro: "I.E.S Punta del Verde, Sevilla",
    periodo: "2016 - 2018",
    detalles: [
      "Formación completa en gestión de redes, servidores, sistemas operativos y seguridad informática.",
      "Desarrollo de conocimientos en lenguajes de programación y bases de datos."
    ]
  }
];

function Estudios() {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section id="estudios" className="seccion-cv">
      <h1>Formación Académica</h1>
      <div className="estudios-lista">
        {estudiosYFormacion.map((estudio) => (
          <div key={estudio.id} className="estudio-item">
            <button 
              onClick={() => toggleItem(estudio.id)}
              aria-expanded={openItemId === estudio.id}
              aria-controls={\`detalles-\${estudio.id}\`}
              className="estudio-header"
            >
              <h3>{estudio.titulo}</h3>
              <span className="toggle-icon">
                {openItemId === estudio.id ? '−' : '+'}
              </span>
            </button>
            {openItemId === estudio.id && (
              <div id={\`detalles-\${estudio.id}\`} className="estudio-detalles">
                <p><strong>{estudio.centro}</strong></p>
                <p>{estudio.periodo}</p>
                <ul>
                  {estudio.detalles.map((detalle, i) => (
                    <li key={i}>{detalle}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}`
          }
        },
        'Estudios.css': {
          type: 'css',
          icon: <FaCss3Alt />,
          description: 'Estilos para acordeón de formación académica',
          content: {
            title: 'Acordeón Interactivo de Estudios',
            description: 'CSS para el componente de estudios con acordeón expansible, animaciones y diseño moderno.',
            features: [
              {
                icon: <FaRocket />,
                title: 'Acordeón Animado',
                description: 'Transiciones suaves para expandir/contraer contenido'
              },
              {
                icon: <FaLightbulb />,
                title: 'Estados Interactivos',
                description: 'Efectos hover y estados activos para botones'
              },
              {
                icon: <FaMobile />,
                title: 'Responsive Design',
                description: 'Adaptación de espaciado y tipografía para móviles'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Accesibilidad Visual',
                description: 'Indicadores visuales claros y contraste optimizado'
              }
            ],
            ejemploCodigo: `.estudios-lista {
  display: flex;
  flex-direction: column;
  gap: var(--estudios-gap);
}

.estudios-item {
  background-color: var(--color-white);
  border: var(--estudios-border);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: all var(--transition-fast) var(--transition-timing);
}`,
            etiquetasTecnologicas: ['CSS', 'Accordion', 'Transitions', 'Responsive']
          }
        },
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
              techTags: ['React State', 'Conditional Rendering', 'Component Composition'],
              ejemploCodigo: `import React, { useState } from 'react';
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

function Proyectos() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  // Array de objetos con los datos de proyectos
  const misProyectos = [
    miCurriculumBrief,
    // Más proyectos aquí...
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
}`
          }
        },
        'Proyectos.css': {
          type: 'css',
          icon: <FaCss3Alt />,
          description: 'Estilos para el grid de proyectos',
          content: {
            title: 'Grid de Proyectos Interactivo',
            description: 'CSS para la sección de proyectos con grid responsivo, cards interactivas y efectos visuales.',
            features: [
              {
                icon: <FaCss3Alt />,
                title: 'CSS Grid Layout',
                description: 'Grid responsivo que se adapta automáticamente al contenido'
              },
              {
                icon: <FaLightbulb />,
                title: 'Hover Effects',
                description: 'Efectos de hover con transformaciones y sombras'
              },
              {
                icon: <FaMobile />,
                title: 'Responsive Cards',
                description: 'Cards que se adaptan desde grid a layout de columna única'
              },
              {
                icon: <FaRocket />,
                title: 'Animaciones CSS',
                description: 'Transiciones suaves y animaciones de entrada'
              }
            ],
            ejemploCodigo: `.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--grid-min-width), 1fr));
  gap: var(--grid-gap);
  margin-top: var(--grid-margin-top);
}

.boton-volver {
  background: var(--color-tag);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
}`,
            etiquetasTecnologicas: ['CSS', 'Grid', 'Cards', 'Transitions']
          }
        },
        'Proyecto-curriculum': {
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
            },
            'ExploradorProyecto.jsx': {
            type: 'js',
            icon: <FaReact />,
            description: 'Explorador interactivo de archivos del proyecto (¡auto-referencia!)',
            content: {
                title: 'Meta-Explorador de Código',
                description: 'El componente que se documenta a sí mismo: un explorador interactivo que muestra la estructura completa del proyecto.',
                features: [
                {
                    icon: <FaFolder />,
                    title: 'Estructura de Datos',
                    description: 'Objeto JavaScript que mapea toda la arquitectura del proyecto'
                },
                {
                    icon: <FaReact />,
                    title: 'React Hooks',
                    description: 'useState para estado de archivos y carpetas expandidas'
                },
                {
                    icon: <FaLightbulb />,
                    title: 'Renderizado Recursivo',
                    description: 'Función recursiva que renderiza el árbol de archivos dinámicamente'
                },
                {
                    icon: <FaCode />,
                    title: 'Auto-Documentación',
                    description: 'Se incluye a sí mismo en la documentación (recursión infinita conceptual)'
                },
                {
                    icon: <FaSearch />,
                    title: 'Navegación Interactiva',
                    description: 'Click en archivos para ver documentación, expansión de carpetas'
                }
                ],
                ejemploCodigo: `// Estado para archivos seleccionados y carpetas expandidas
    const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
    const [carpetasExpandidas, setCarpetasExpandidas] = useState(new Set(['src', 'components']));

    // Renderizado recursivo del árbol de archivos
    const renderizarArbolArchivos = (estructura, ruta = '') => {
    return Object.entries(estructura).map(([nombre, contenido]) => {
        const rutaActual = ruta ? \`\${ruta}/\${nombre}\` : nombre;
        
        if (contenido.type) {
        // Es un archivo
        return (
            <div
            key={rutaActual}
            className={\`file-item \${archivoSeleccionado === rutaActual ? 'active' : ''}\`}
            onClick={() => setArchivoSeleccionado(rutaActual)}
            >
            <span className="file-icon">{contenido.icon}</span>
            <span className="file-name">{nombre}</span>
            </div>
        );
        } else {
        // Es una carpeta - recursión aquí
        return renderizarArbolArchivos(contenido, rutaActual);
        }
    });
    };`,
                techTags: ['React Hooks', 'Recursive Rendering', 'Meta-Programming', 'File Explorer']
            }
            },
            'ExploradorProyecto.css': {
            type: 'css',
            icon: <FaCss3Alt />,
            description: 'Estilos para el explorador de archivos/documentación',
            content: {
                title: 'Estilos del Explorador de Proyecto',
                description: 'CSS para el explorador de archivos con layout flexible, cards y resaltado de código.',
                features: [
                {
                    icon: <FaFolder />,
                    title: 'Árbol de Archivos',
                    description: 'Estructura visual jerárquica con iconos y estados expandidos'
                },
                {
                    icon: <FaCode />,
                    title: 'Syntax Highlighting',
                    description: 'Resaltado de código con colores temáticos'
                },
                {
                    icon: <FaMobile />,
                    title: 'Layout Responsivo',
                    description: 'Panel lateral colapsable y adaptación móvil'
                },
                {
                    icon: <FaLightbulb />,
                    title: 'Estados Interactivos',
                    description: 'Hover effects, selección activa y feedback visual'
                }
                ],
                ejemploCodigo: `.explorador-proyecto {
    max-width: var(--explorador-max-width);
    min-height: var(--explorador-min-height);
    margin: 0 auto;
    background: var(--color-white);
    border-radius: 16px;
    box-shadow: var(--explorador-shadow);
    display: flex;
    flex-direction: column;
    padding: var(--explorador-padding);
    }`,
                etiquetasTecnologicas: ['CSS', 'Layout', 'Cards', 'Code Highlight']
            }
            },
            'MiCurriculum.css': {
          type: 'css',
          icon: <FaCss3Alt />,
          description: 'Estilos para la presentación del meta-proyecto',
          content: {
            title: 'Estilos del Meta-Proyecto',
            description: 'CSS para la presentación del proyecto curriculum que se documenta a sí mismo.',
            features: [
              {
                icon: <FaLightbulb />,
                title: 'Diseño Meta',
                description: 'Estilos que reflejan la naturaleza auto-referencial del proyecto'
              },
              {
                icon: <FaRocket />,
                title: 'Presentación Elegante',
                description: 'Layout limpio y profesional para mostrar información del proyecto'
              },
              {
                icon: <FaMobile />,
                title: 'Responsive Cards',
                description: 'Cards adaptativas con información técnica y características'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Jerarquía Visual',
                description: 'Tipografía y espaciado que guía la lectura de forma natural'
              }
            ],
            ejemploCodigo: `.pagina-detalles-proyecto {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-proyecto {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--color-background), var(--color-white));
  border-radius: 12px;
  border: 1px solid var(--color-border);
}`,
            etiquetasTecnologicas: ['CSS', 'Meta-Design', 'Cards', 'Responsive']
          }
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
            ejemploCodigo: `const [formData, setFormData] = useState({
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
        },
        'Contacto.css': {
          type: 'css',
          icon: <FaCss3Alt />,
          description: 'Estilos para el formulario de contacto',
          content: {
            title: 'Formulario de Contacto Interactivo',
            description: 'CSS para el formulario de contacto con validación visual, estados UX y diseño responsivo.',
            features: [
              {
                icon: <FaReact />,
                title: 'Estados Visuales',
                description: 'Estilos para estados de loading, success, error y validación'
              },
              {
                icon: <FaLightbulb />,
                title: 'Feedback Visual',
                description: 'Indicadores claros de estado del formulario y campos'
              },
              {
                icon: <FaMobile />,
                title: 'Formulario Responsivo',
                description: 'Adaptación completa para móviles con espaciado optimizado'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Accesibilidad',
                description: 'Estilos para focus, contraste y lectores de pantalla'
              }
            ],
            ejemploCodigo: `.seccion-contacto {
  display: flex;
  flex-direction: column;
  gap: var(--contacto-gap);
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
}

.formulario-contacto {
  display: flex;
  flex-direction: column;
  gap: var(--form-gap);
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}`,
            etiquetasTecnologicas: ['CSS', 'Forms', 'Responsive', 'UX']
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
        ejemploCodigo: `// Rate limiting implementation
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
};`
      }
    }
  }
};

export default estructuraProyecto;