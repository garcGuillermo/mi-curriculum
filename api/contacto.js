/**
 * Este es el punto de entrada de la función serverless para Vercel.
 * Se encarga de manejar las peticiones HTTP que llegan al endpoint '/api/contacto'.
 *
 * @param {object} req - El objeto de la petición (Request).
 * @param {object} res - El objeto de la respuesta (Response).
 */
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Configura los encabezados CORS para permitir peticiones desde cualquier origen.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Solo se acepta POST.' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos obligatorios: nombre, email o mensaje.' });
    }

    // --- Configuración de Nodemailer para enviar el correo ---
    // IMPORTANTE: NO pongas tus credenciales directamente aquí.
    // Debes usar variables de entorno para mantenerlas seguras.
    // En Vercel, esto se configura en el panel de control del proyecto.
    // Por ejemplo, para usar Gmail, las variables serían:
    // USER_EMAIL=tu-email@gmail.com
    // USER_PASSWORD=tu-contraseña-de-aplicación

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Puedes usar otros servicios como Outlook, SendGrid, etc.
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.USER_EMAIL, // El correo del remitente.
      to: process.env.USER_EMAIL, // El correo del destinatario (normalmente el tuyo).
      replyTo: email, // Permite responder al correo del usuario.
      subject: `Nuevo mensaje de ${name} desde tu portfolio`,
      html: `
        <h3>Tienes un nuevo mensaje de tu sitio web:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Envía el correo usando el transporter y las opciones.
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });

  } catch (error) {
    console.error('Error procesando la petición:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};
