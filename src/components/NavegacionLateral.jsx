import React from 'react';

function NavegacionLateral() {
  // Array de objetos para definir las secciones de tu CV
  // Cada objeto tiene un 'id' (para el href) y un 'nombre' (para el texto visible)
  const seccionesCV = [
    { id: 'sobre-mi', nombre: 'Sobre Mí' },
    { id: 'experiencia', nombre: 'Experiencia' },
    { id: 'educacion', nombre: 'Educación' },
    { id: 'habilidades', nombre: 'Habilidades' },
    { id: 'proyectos', nombre: 'Proyectos' },
    { id: 'contacto', nombre: 'Contacto' },
  ];

  return (
    <div className="navegacion-lateral">
      <h2>Menú CV</h2>
      <ul>
        {/* Mapeamos el array seccionesCV para generar los elementos <li> dinámicamente */}
        {seccionesCV.map(seccion => (
          <li key={seccion.id}> {/* Usamos el id como key, que es único para cada sección */}
            <a href={`#${seccion.id}`}>{seccion.nombre}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavegacionLateral; // Exporta el componente
