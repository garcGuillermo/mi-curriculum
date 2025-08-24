/**
 * Función serverless para Vercel que maneja el envío de emails del formulario de contacto.
 * Incluye validaciones, limitación de tamaño y medidas de seguridad.
 *
 * @param {object} req - El objeto de la petición (Request).
 * @param {object} res - El objeto de la respuesta (Response).
 */
const nodemailer = require('nodemailer');

// Configuración de límites
const MAX_LENGTH = {
  name: 100,
  email: 254, // RFC 5321 estándar
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
  const now = Date.now();
  const userRequests = requests.get(ip) || [];
  
  // Filtrar solicitudes dentro de la ventana de tiempo
  const recentRequests = userRequests.filter(timestamp => now - timestamp < TIME_WINDOW);
  
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

module.exports = async (req, res) => {
  // Configurar CORS con más seguridad
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://curriculumvitaeguillermo.vercel.app/',
    'garciainurriaguillermo.es'
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400'); // Cache preflight por 24h

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Método no permitido. Solo se acepta POST.',
      allowedMethods: ['POST'] 
    });
  }

  // Verificar variables de entorno
  if (!process.env.USER_EMAIL || !process.env.USER_PASSWORD) {
    console.error('Variables de entorno USER_EMAIL y USER_PASSWORD no configuradas');
    return res.status(500).json({ 
      error: 'Configuración del servidor incompleta.' 
    });
  }

  // Rate limiting
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
    const { name, email, message } = req.body || {};

    // Validar entrada
    const validationErrors = validateInput(name, email, message);
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        error: 'Datos de entrada inválidos.',
        details: validationErrors 
      });
    }

    // Sanitizar datos
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedMessage = sanitizeInput(message);

    // Configuración de Nodemailer con timeout y pool
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
      pool: true, // Usar pool de conexiones
      maxConnections: 1,
      maxMessages: 3,
      rateDelta: 20000, // 20 segundos entre envíos
      rateLimit: 3, // máximo 3 emails por rateDelta
      tls: {
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2'
      },
      timeout: 10000, // 10 segundos timeout
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000
    });

    // Verificar conexión antes de enviar
    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.USER_EMAIL}>`,
      to: process.env.USER_EMAIL,
      replyTo: `"${sanitizedName}" <${sanitizedEmail}>`,
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
      `.trim(),
      priority: 'normal',
      headers: {
        'X-Portfolio-Contact': 'true',
        'X-Client-IP': clientIP
      }
    };

    // Enviar email con timeout
    const info = await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 15000)
      )
    ]);

    console.log('Email enviado exitosamente:', info.messageId);

    // Cerrar transporter
    transporter.close();

    res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente.',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Error procesando la petición:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      clientIP
    });

    // Respuestas de error más específicas
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        error: 'Error de autenticación del servidor de email.' 
      });
    }
    
    if (error.code === 'ECONNECTION' || error.message === 'Email timeout') {
      return res.status(503).json({ 
        error: 'Servicio temporalmente no disponible. Intenta más tarde.' 
      });
    }

    res.status(500).json({ 
      error: 'Error interno del servidor.',
      timestamp: new Date().toISOString()
    });
  }
};
