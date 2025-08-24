import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './Variables.css';
import NavegacionLateral from './components/NavegacionLateral/NavegacionLateral';
import Bienvenida from './components/Bienvenida/Bienvenida';
import SobreMi from './components/SobreMi/SobreMi';
import Experiencia from './components/Experiencia/Experiencia';
import Estudios from './components/Estudios/Estudios';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';

function App() {
  // Estado para controlar si la bienvenida está visible
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);
  // Estado para saber si el usuario ha manipulado la bienvenida manualmente (ocultado/mostrado con el botón)
  const [bienvenidaManipuladaManualmente, setBienvenidaManipuladaManualmente] = useState(false);

  const location = useLocation(); // Hook para obtener la URL actual

  // Usamos useRef para mantener un registro de la ruta anterior sin causar re-renders innecesarios
  const prevPathname = useRef(location.pathname);
  // REFERENCIA AL CONTENEDOR PRINCIPAL PARA HACER SCROLL
  const contenidoPrincipalRef = useRef(null);
  // REFERENCIA A LA NAVEGACIÓN LATERAL PARA HACER SCROLL
  const navegacionLateralRef = useRef(null);

  // Efecto para ocultar la bienvenida automáticamente al navegar a cualquier sección
  useEffect(() => {
    // Siempre oculta la bienvenida cuando navegamos a una ruta diferente de '/'
    if (location.pathname !== '/') {
      setMostrarBienvenida(false); // Oculta la bienvenida
    }

    // Actualizamos la ruta anterior para la próxima renderización
    prevPathname.current = location.pathname;
  }, [location.pathname]); // Solo depende de la ruta

  // Función para alternar la visibilidad de la bienvenida (usada por el botón de flecha)
  const toggleBienvenida = () => {
    setMostrarBienvenida(prev => !prev);
    setBienvenidaManipuladaManualmente(true); // Marca que el usuario la ha manipulado
  };

  // Nueva función para mostrar la bienvenida y reiniciar su estado al hacer clic en la foto
  const mostrarBienvenidaAlInicio = () => {
    setMostrarBienvenida(true); // Asegura que la bienvenida esté visible
    setBienvenidaManipuladaManualmente(false); // Reinicia el estado para que se pueda auto-ocultar de nuevo
    
    // Hace scroll hacia arriba en la navegación lateral
    if (navegacionLateralRef.current) {
      navegacionLateralRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="contenedor-app">
      <NavegacionLateral 
        mostrarBienvenidaAlInicio={mostrarBienvenidaAlInicio} 
        ref={navegacionLateralRef}
      />

      {/* Se ha añadido la referencia al div para poder manipular su scroll */}
      <div ref={contenidoPrincipalRef} className="contenido-principal">
        <Bienvenida
          onToggle={toggleBienvenida}
          estaVisible={mostrarBienvenida}
        />

        <Routes key={location.pathname}>
          {/* Ruta principal: cuando la URL es "/", muestra el componente SobreMi */}
          <Route path="/" element={<SobreMi />} />
          
          {/* Ruta explícita para "Sobre Mí": cuando la URL es "/sobre-mi", también muestra SobreMi */}
          <Route path="/sobre-mi" element={<SobreMi />} />
          
          {/* INICIO CODIGO NUEVO */}
          {/* Añade aquí las rutas para tus otras secciones */}
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* FIN CODIGO NUEVO */}
          
          {/* Opcional: Una ruta comodín para manejar URLs no encontradas (error 404) */}
          {/* <Route path="*" element={<div><h1>404: Página no encontrada</h1><p>La sección que buscas no existe.</p></div>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
