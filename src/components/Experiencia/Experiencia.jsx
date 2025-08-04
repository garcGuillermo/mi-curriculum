import React from 'react';
// Importamos el nuevo archivo CSS para la sección de experiencia
import './Experiencia.css';

// Datos de la experiencia laboral extraídos de tu CV
const experienciaLaboral = [
  {
    empresa: "BURGER KING SPAIN",
    periodo: "2021 - 2024",
    cargo: "Empleado Experto",
    descripcion: [
      "Manejo de sistemas de punto de venta (POS) y supervisión de procesos de compra, demostrando atención al detalle y capacidad de trabajo bajo presión.",
      "Colaboración efectiva con equipos de trabajo en un entorno de alta demanda, desarrollando habilidades de comunicación y adaptabilidad."
    ],
  },
  {
    empresa: "DIPUTACIÓN DE SEVILLA",
    periodo: "2019 - 2020",
    cargo: "Técnico de Microinformática",
    descripcion: [
      "Responsable especializado en mantenimiento del hardware en la instalación y del correcto funcionamiento de la red de empleados.",
      "Gestión y solución de incidencias.",
    ],
  },
  {
    empresa: "GPIC S.L",
    periodo: "2019",
    cargo: "Técnico de Sistemas y Microinformática",
    descripcion: [
      "Trabajo en infraestructuras de telecomunicaciones con ingenieros informáticos en gestión de redes y su manutención.",
      "Especializado en tareas de microinformática.",
    ],
  },
  {
    empresa: "FoundEver",
    periodo: "2024 - 2025",
    cargo: "Teleoperador",
    descripcion: [
      "Venta.",
      "Uso de programas informáticos como CRM y Siebel 8.",
    ],
  },
];

// Componente para la sección "Experiencia Profesional"
const Experiencia = () => {
  return (
    <section id="experiencia" className="seccion-cv">
      {/* El título de la sección se renderiza como h1 para mantener la consistencia */}
      <h1>Experiencia Profesional</h1>

      {/* Contenedor principal para la línea de tiempo */}
      <div className="experiencia-lista">
        {experienciaLaboral.map((job, index) => (
          // Cada experiencia laboral es un item de la línea de tiempo
          <div key={index} className="experiencia-item">
            {/* Encabezado con cargo y fecha */}
            <div className="experiencia-encabezado">
              <h3 className="experiencia-rol">{job.cargo}</h3>
              <span className="experiencia-fecha">{job.periodo}</span>
            </div>
            {/* Nombre de la empresa */}
            <h4 className="experiencia-empresa">{job.empresa}</h4>
            {/* Lista de responsabilidades */}
            <ul className="experiencia-responsabilidades">
              {job.descripcion.map((item, descIndex) => (
                <li key={descIndex}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
