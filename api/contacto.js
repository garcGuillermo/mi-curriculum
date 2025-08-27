/**
 * API Serverless para Vercel: Envío de emails desde el formulario de contacto.
 *
 * ¿Qué hace este archivo?
 * - Recibe los datos del formulario de contacto (nombre, email, mensaje).
 * - Valida y limpia los datos recibidos.
 * - Limita el número de envíos por IP para evitar spam.
 * - Envía el mensaje por email usando el servicio Resend.
 * - Responde con éxito o error según el resultado.
 *
 * ¿Qué necesitas para que funcione?
 * - Tener una cuenta en https://resend.com y configurar la variable de entorno RESEND_API_KEY.
 * - Configurar CONTACT_EMAIL con el email que recibirá los mensajes.
 *
 * ¿Dónde se usa?
 * - Este archivo se ejecuta automáticamente cuando alguien envía el formulario de contacto en la web.
 *
 * Parámetros:
 * @param {object} req - Petición HTTP (Request), con los datos del formulario.
 * @param {object} res - Respuesta HTTP (Response), para devolver el resultado al usuario.
 *
 * Seguridad:
 * - No almacena datos personales.
 * - Protege contra spam y ataques XSS.
 */

import { Resend } from 'resend';

// Configuración de límites
const MAX_LENGTH = {
  name: 100,
  email: 254, // Es el RFC 5321 estándar, lo máximo que puede ser de largo un email.
  message: 2000
};

// Expresión regular para validar email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting simple (en memoria)
const requests = new Map();
const RATE_LIMIT = 5; // máximo 5 solicitudes
const TIME_WINDOW = 15 * 60 * 1000; // en 15 minutos

/**
 * Valida el formato y longitud de los datos del formulario
 */
function validateInput(name, email, message) {
  const errors = [];

  // Validar nombre
  if (!name || typeof name !== 'string') {
    errors.push('El nombre es obligatorio.');
  } else if (name.trim().length === 0) {
    errors.push('El nombre no puede estar vacío.');
  } else if (name.length > MAX_LENGTH.name) {
    errors.push(`El nombre no puede exceder ${MAX_LENGTH.name} caracteres.`);
  }

  // Validar email
  if (!email || typeof email !== 'string') {
    errors.push('El email es obligatorio.');
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push('El formato del email no es válido.');
  } else if (email.length > MAX_LENGTH.email) {
    errors.push(`El email no puede exceder ${MAX_LENGTH.email} caracteres.`);
  }

  // Validar mensaje
  if (!message || typeof message !== 'string') {
    errors.push('El mensaje es obligatorio.');
  } else if (message.trim().length === 0) {
    errors.push('El mensaje no puede estar vacío.');
  } else if (message.length > MAX_LENGTH.message) {
    errors.push(`El mensaje no puede exceder ${MAX_LENGTH.message} caracteres.`);
  }

  return errors;
}

/**
 * Implementa rate limiting básico por IP
 */
function checkRateLimit(ip) {
  //Obtenemos la hora actual
  const now = Date.now();
  //Buscamos las solicitudes previas de esta IP
  const userRequests = requests.get(ip) || [];
  
  // Filtrar solicitudes dentro de la ventana de tiempo (15 minutos)
  const recentRequests = userRequests.filter(timestamp => now - timestamp < TIME_WINDOW);
  //Si ya ha hecho demasiadas solicitudes, bloqueamos
  if (recentRequests.length >= RATE_LIMIT) {
    return false;
  }
  
  // Actualizar registro
  recentRequests.push(now);
  requests.set(ip, recentRequests);
  
  // Limpiar registros antiguos periódicamente
  if (Math.random() < 0.1) { // 10% de probabilidad
    for (const [key, timestamps] of requests.entries()) {
      const filtered = timestamps.filter(timestamp => now - timestamp < TIME_WINDOW);
      if (filtered.length === 0) {
        requests.delete(key);
      } else {
        requests.set(key, filtered);
      }
    }
  }
  
  return true;
}

/**
 * Sanitiza el contenido para prevenir inyecciones HTML/XSS
 * Básicamente evitamos que se puedan insertar etiquetas HTML.
 */
function sanitizeInput(input) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

//La función asíncrona principal que maneja la petición.
export default async function handler(req, res) {
  // Configurar CORS con más seguridad.
  //Permitimos solo orígenes específicos.
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://curriculumvitaeguillermo.vercel.app',
    'https://garciainurriaguillermo.es'
  ];
  //Obtenemos el origen de la petición.
  const origin = req.headers.origin;
  //Si el origen está en la lista, lo permitimos.
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //Solo permitimos POST y OPTIONS.
  //Solo permitimos el header Content-Type.
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400'); // Cache preflight por 24h
  //Si la petición es OPTIONS, respondemos 200 y salimos.
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  // Solo permitimos POST.
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Método no permitido. Solo se acepta POST.',
      allowedMethods: ['POST'] 
    });
  }

  // Verificar que la clave API está configurada para evitar errores confusos.
  if (!process.env.RESEND_API_KEY) {
    console.error('Variable de entorno RESEND_API_KEY no configurada');
    return res.status(500).json({ 
      error: 'Configuración del servidor incompleta.' 
    });
  }
  //Dejo estos logs para depuración en caso de problemas.
  console.log('🔑 RESEND_API_KEY configurada:', process.env.RESEND_API_KEY ? 'SÍ' : 'NO');
  console.log('📧 CONTACT_EMAIL:', process.env.CONTACT_EMAIL || 'garciainurriaguillermo@gmail.com');

  //Ahora por fin inicializamos Resend.
  const resend = new Resend(process.env.RESEND_API_KEY);

  //Comprobamos que la IP no ha excedido el límite de solicitudes.
  //Obtenemos la IP del cliente.
  const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || 
                   req.headers['x-real-ip'] || 
                   req.connection?.remoteAddress || 
                   'unknown';
                   
  if (!checkRateLimit(clientIP)) {
    return res.status(429).json({ 
      error: 'Demasiadas solicitudes. Intenta de nuevo en 15 minutos.',
      retryAfter: 900 // 15 minutos en segundos
    });
  }
  
  try {
    // Extraer datos del cuerpo de la petición.
    const { name, email, message } = req.body || {};

    // Validar entrada de datos.
    const validationErrors = validateInput(name, email, message);
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        error: 'Datos de entrada inválidos.',
        details: validationErrors 
      });
    }

    // Sanitizar datos para evitar XSS.
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedMessage = sanitizeInput(message);

    // Enviar email con Resend
    const emailData = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Email verificado de Resend
      to: [process.env.CONTACT_EMAIL || 'ggarciainurria@gmail.com'], // Cambiado al email verificado en Resend
      replyTo: sanitizedEmail,
      subject: `💼 Nuevo mensaje de ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .content { background: #fff; border-left: 4px solid #007bff; padding: 15px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 Nuevo mensaje desde tu portfolio</h2>
              <p>Recibido el ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
            </div>
            
            <div class="field">
              <div class="label">👤 Nombre:</div>
              <div>${sanitizedName}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
            </div>
            
            <div class="field">
              <div class="label">💬 Mensaje:</div>
              <div class="content">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
              <p>IP del remitente: ${clientIP}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nuevo mensaje desde tu portfolio

Nombre: ${sanitizedName}
Email: ${sanitizedEmail}
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}

Mensaje:
${sanitizedMessage}

---
IP del remitente: ${clientIP}
      `.trim()
    });

    console.log('✅ Email enviado exitosamente!');
    console.log('� Respuesta completa de Resend:', JSON.stringify(emailData, null, 2));
    console.log('�📧 ID del mensaje:', emailData.data?.id || emailData.id);
    console.log('📤 Desde:', emailData.data?.from || emailData.from);
    console.log('📬 Para:', process.env.CONTACT_EMAIL || 'garciainurriaguillermo@gmail.com');

    res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente.',
      messageId: emailData.data?.id || emailData.id || 'no-id'
    });

  } catch (error) {
    // Registro detallado del error para depuración.
    console.error('Error procesando la petición:', {
      message: error.message,
      timestamp: new Date().toISOString(),
      clientIP
    });

    // Respuestas de error específicas para Resend
    if (error.message?.includes('API key') || error.message?.includes('Unauthorized')) {
      return res.status(500).json({ 
        error: 'Error de configuración del servicio de email.' 
      });
    }
    
    if (error.message?.includes('rate limit') || error.message?.includes('quota')) {
      return res.status(503).json({ 
        error: 'Servicio temporalmente no disponible. Intenta más tarde.' 
      });
    }

    if (error.message?.includes('domain') || error.message?.includes('testing emails')) {
      return res.status(403).json({ 
        error: 'Error de configuración de dominio del servicio de email.' 
      });
    }

    res.status(500).json({ 
      error: 'Error interno del servidor.',
      timestamp: new Date().toISOString()
    });
  }
}
