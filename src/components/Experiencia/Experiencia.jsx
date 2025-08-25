import React from 'react';
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
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="seccion-cv">
      <h1>Experiencia Profesional</h1>

      {/* Lista con línea de tiempo */}
      <div className="experiencia-lista">
        {experienciaLaboral.map((job, index) => (
          <div key={index} className="experiencia-item">
            {/* Cargo y período */}
            <div className="experiencia-encabezado">
              <h3 className="experiencia-rol">{job.cargo}</h3>
              <span className="experiencia-fecha">{job.periodo}</span>
            </div>
            {/* Empresa */}
            <h4 className="experiencia-empresa">{job.empresa}</h4>
            {/* Responsabilidades principales */}
            <ul className="experiencia-responsabilidades">{job.descripcion.map((item, descIndex) => (
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
