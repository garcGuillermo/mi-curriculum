import React, { useState } from 'react';
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

  // Inicializar pantallaSaliente
  React.useEffect(() => {
    setPantallaSaliente(null);
  }, []);

  const pantallas = [
    {
      titulo: "Presentación",
      iconoFondo: iconosGenerados[0],
      contenido: (
        <div>
          <h2>¡Hola!</h2>
          <p>
            Me llamo Guillermo y soy técnico superior en <span className="resaltado">Administración de Sistemas Informáticos en 
            Red (ASIR)</span> y como tal adquirí una sólida base en <span className="resaltado">redes y sistemas. </span> 
            Además de ello, obtuve en mi aprendizaje la lógica de la programación pudiendome adaptar a cualquier lenguaje
            que se me presente. A parte de los utilizados en este proyecto, aprendimos <span className="resaltado">Java, SQL, 
              PHP y bash en Windows y Linux entre otros.</span> 
          </p>
        </div>
      )
    },
    {
      titulo: "Presentacion2",
      iconoFondo: iconosGenerados[1],
      contenido: (
        <div>
          <h2>Interés en la programación</h2>
          <p>
            A pesar de que la mayor parte de mi experiencia laboral ha estado orientada a la administración de sistemas y soporte técnico,
            me siento mucho más cómodo y realizado cuando estoy programando. Cuando sobrevino la pandemia, no tuve la oportunidad de 
            continuar con la programación como me hubiese gustado aunque eso no me impidió seguir formándome por mi cuenta. 
          </p>
          <p>
            Siento que si hubiese 
            tenido algo más de suerte, podría haber seguido una carrera en desarrollo de software mucho antes, desde hace años.
          </p>
        </div>
      )
    },
    {
      titulo: "Nudo",
      iconoFondo: iconosGenerados[2],
      contenido: (
        <div>
          <h2>Poco a poco, sin rendirme</h2>
          <p>
            Gracias al curso IFCD0110 de Confección y Publicación de Páginas Web, he podido encauzar mi carrera hacia la programación web.
            Este curso me ha hecho recordar la gran cantidad de conocimientos que aprendí en el <span className="resaltado">ciclo superior</span> y
            me ha ayudado a explorar otras tecnología, como <span className="resaltado">React</span>, la cual no entraba en el contenido del curso 
            pero que aún así decidí aprender por mi cuenta.
          </p>
        </div>
      )
    },
    {
      titulo: "Habilidades",
      iconoFondo: iconosGenerados[3],
      contenido: (
        <div>
          <h2>Mis habilidades</h2>
          <p>
            Tampoco es que yo sea un superhumano, pero he aprendido a sobrellevar situaciones difíciles de estrés en mis anteriores trabajos, 
            he desarrollado la capacidad de adaptación, mejorado la comunicación en equipo, el trato a las personas y sobre todo a resolver 
            los problemas. Algo que destacaría de mí es que soy una persona tranquila y que tengo muy claro mis objetivos profesionales.
          </p>
          <h3>En resumen:</h3>
          <div className="grid-habilidades">
            <div>Tranquilo</div>
            <div>Resolutivo</div>
            <div>Sociable</div>
            <div>Ordenado</div>
            <div>Perfeccionista</div>
            <div>Buen compañero</div>
          </div>
        </div>
      )
    },
    {
      titulo: "El Proyecto",
      iconoFondo: iconosGenerados[4],
      contenido: (
        <div>
          <h2>Pequeño resumen de la realización del proyecto</h2>
          <p>
            No voy a negar que me he servido de la ayuda de las <span className="resaltado">Inteligencias Artificiales</span> para este proyecto, 
            tan a mano que están en la actualidad y que representan el futuro de la tecnología en sí. Aunque todo no ha sido un camino de rosas.
          </p>
          <p>
            Por ejemplo, me he ayudado de <span className="resaltado">Google Gemini</span> para ideas, estructura recomendada y para los primeros pasos de este proyecto. Brindándome
            explicaciones por ejemplo de cómo implementar <span className="resaltado">React Routers o Vite.</span>
          </p>
        </div>
      )
    },
    {
      titulo: "El Proyecto 2",
      iconoFondo: iconosGenerados[0],
      contenido: (
        <div>
          <h2>Pequeño resumen de la realización del proyecto</h2>
          <p>
            Para la realización del código he usado Visual Studio Code ayudándome de <span className="resaltado">Github copilot y de Claude Sonnet 4</span> para 
            tareas repetitivas o de poca importancia, para mejorar el código y su responsividad y para mejora de la lógica en general.
          </p>
          <p>
            Pienso que en la actualidad todavía es muy difícil pedirle a una Inteligencia Artificial la realización completa de un proyecto. 
            A pesar de ello, es una herramienta muy útil a tener en cuenta y que sin duda será cada vez más importante en el futuro.
          </p>
        </div>
      )
    },
    {
      titulo: "Final",
      iconoFondo: iconosGenerados[1],
      contenido: (
        <div>
          <h2>Para finalizar</h2>
          <p>
            Si has llegado hasta aquí, <span className="resaltado">muchas muchas gracias</span> por leerme. Lo más importante para mí es 
            encontrar un entorno de trabajo donde pueda seguir aprendiendo y creciendo como profesional,
            aportando valor a la empresa y al equipo. Estoy abierto a aprender nuevos lenguajes, recordar los que conozco y en general
            a seguir formándome. Te deseo lo mejor y espero que podamos coincidir en un futuro <span className="resaltado">¡Gracias!</span>
          </p>
        </div>
      )
    }
  ];

  const irAPantallaSiguiente = () => {
    if (pantallaActual < pantallas.length - 1 && !estaTransicionando) {
      const nuevaPantalla = pantallaActual + 1;
      
      // Guardar la pantalla actual como "saliente"
      setPantallaSaliente(pantallaActual);
      // Cambiar la pantalla de destino
      setPantallaActual(nuevaPantalla);
      
      // Iniciar la transición inmediatamente
      setEstaTransicionando(true);
      setDireccionTransicion('siguiente');
      
      setTimeout(() => {
        setEstaTransicionando(false);
        setDireccionTransicion('');
        setPantallaSaliente(null);
      }, 400);
    }
  };

  const irAPantallaAnterior = () => {
    if (pantallaActual > 0 && !estaTransicionando) {
      const nuevaPantalla = pantallaActual - 1;
      
      // Guardar la pantalla actual como "saliente"
      setPantallaSaliente(pantallaActual);
      // Cambiar la pantalla de destino
      setPantallaActual(nuevaPantalla);
      
      // Iniciar la transición inmediatamente
      setEstaTransicionando(true);
      setDireccionTransicion('anterior');
      
      setTimeout(() => {
        setEstaTransicionando(false);
        setDireccionTransicion('');
        setPantallaSaliente(null);
      }, 400);
    }
  };

  const irAPantalla = (indice) => {
    if (!estaTransicionando) {
      setPantallaActual(indice);
      setPantallaSaliente(null);
    }
  };

  return (
    <section id="sobre-mi" className="seccion-cv">
      <h1>Sobre Mí</h1>
      
      <div className="presentacion-container">
        {/* Contenedor de pantallas con posicionamiento relativo */}
        <div className="pantallas-wrapper">
          {/* Pantalla nueva (la que llega) - siempre debajo */}
          <div className="pantalla-contenido pantalla-nueva">
            {/* Fondo con iconos React */}
            <div className="fondo-iconos-react">
              {Array.from({ length: 20 }, (_, i) => {
                const IconoComponent = pantallas[pantallaActual].iconoFondo;
                return (
                  <IconoComponent 
                    key={i} 
                    className={`icono-fondo-react icono-${i}`} 
                  />
                );
              })}
            </div>
            {pantallas[pantallaActual].contenido}
          </div>
          
          {/* Pantalla saliente (la que se va) - solo durante transición */}
          {estaTransicionando && pantallaSaliente !== null && (
            <div className={`pantalla-contenido pantalla-saliente transicionando-${direccionTransicion}`}>
              {/* Fondo con iconos React para pantalla saliente */}
              <div className="fondo-iconos-react">
                {Array.from({ length: 20 }, (_, i) => {
                  const IconoComponent = pantallas[pantallaSaliente].iconoFondo;
                  return (
                    <IconoComponent 
                      key={i} 
                      className={`icono-fondo-react icono-${i}`} 
                    />
                  );
                })}
              </div>
              {pantallas[pantallaSaliente].contenido}
            </div>
          )}
        </div>

        {/* Controles de navegación */}
        <div className="controles-navegacion">
          <button 
            className="btn-navegacion btn-anterior" 
            onClick={irAPantallaAnterior}
            disabled={pantallaActual === 0 || estaTransicionando}
          >
            ← Anterior
          </button>
          
          <div className="indicadores">
            {pantallas.map((_, indice) => (
              <button
                key={indice}
                className={`indicador ${indice === pantallaActual ? 'activo' : ''}`}
                onClick={() => irAPantalla(indice)}
                disabled={estaTransicionando}
              >
                {indice + 1}
              </button>
            ))}
          </div>
          
          <button 
            className="btn-navegacion btn-siguiente" 
            onClick={irAPantallaSiguiente}
            disabled={pantallaActual === pantallas.length - 1 || estaTransicionando}
          >
            Siguiente →
          </button>
        </div>

        {/* Contador de pantallas */}
        <div className="contador-pantallas">
          {pantallaActual + 1} de {pantallas.length}
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
