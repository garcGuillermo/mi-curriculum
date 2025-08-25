import React, { useState } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contacto.css';

function Contacto() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  // Estado del envío (mensaje de feedback al usuario)
  const [status, setStatus] = useState('');

  // Datos de contacto personal
  const myInfo = {
    email: "garciainurriaguillermo@gmail.com",
    phone: "+34 645192414",
    githubUrl: "https://github.com/garcGuillermo",
    linkedinUrl: "https://www.linkedin.com/in/guillermo-garc%C3%ADa-inurria-857084152/",
  };

  // Maneja cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('Cargando...');

    const apiEndpoint = '/api/contacto'; 
    
    try {
      // Envía datos a la API serverless
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nombre, 
          email: formData.email, 
          message: formData.mensaje 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Mensaje enviado. ¡Gracias por contactar!');
        // Limpia el formulario tras envío exitoso
        setFormData({
          nombre: '',
          email: '',
          mensaje: '',
        });
      } else {
        setStatus(`Error: ${data.error || 'Error desconocido del servidor'}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <section id="contacto" className="seccion-cv seccion-contacto">
      <h1>Contacto</h1>
      
      {/* Formulario principal */}
      <form className="formulario-contacto" onSubmit={handleSubmit}>
        <p>Me encantaría saber de vosotros. Completa el formulario de abajo y me pondré en contacto lo antes posible. 
          También podeís encontrarme en mis perfiles de redes sociales.</p>
        <fieldset>
          <legend>Información de contacto</legend>
          <div className="campo-formulario">
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              placeholder="Tu nombre completo / Empresa" 
              value={formData.nombre}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="campo-formulario">
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="ejemplo@correo.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="campo-formulario">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              placeholder="Escribe aquí tu mensaje..." 
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </fieldset>
        
        <button type="submit" className="boton-enviar" disabled={status === 'Cargando...'}>
          {status === 'Cargando...' ? 'Enviando...' : 'Enviar'}
        </button>
        {/* Mensaje de estado del envío */}
        {status && <p className="mensaje-estado">{status}</p>}
      </form>

      {/* Información de contacto directo y redes sociales */}
      <div className="info-contacto">
        {/* Correo electrónico */}
        <div className="info-contacto-item">
          <MdEmail className="icono" />
          <div>
            <h4>Correo Electrónico</h4>
            <p>{myInfo.email}</p>
          </div>
        </div>
        
        {/* Teléfono */}
        <div className="info-contacto-item">
          <MdPhone className="icono" />
          <div>
            <h4>Teléfono</h4>
            <p>{myInfo.phone}</p>
          </div>
        </div>
        
        {/* Perfil de GitHub */}
        <a href={myInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="boton-red-social">
          <div className="info-contacto-item">
            <FaGithub className="icono" />
            <div>
              <h4>GitHub</h4>
              <p>Perfil de GitHub</p>
            </div>
          </div>
        </a>
        
        {/* Perfil de LinkedIn */}
        <a href={myInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="boton-red-social">
          <div className="info-contacto-item">
            <FaLinkedin className="icono" />
            <div>
              <h4>LinkedIn</h4>
              <p>Perfil de LinkedIn</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contacto;
