// server/server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Puedes cambiarlo según tu proveedor de correo
  auth: {
    user: 'jlcarrillop89@gmail.com', // Cambia esto
    pass: 'LuisPablo+55441', // Cambia esto
  },
});



// Ruta para manejar el envío del formulario
app.post('/enviar-correo', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'tu_correo@gmail.com', // Cambia esto
    to: 'destinatario@gmail.com', // Cambia esto
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        return res.status(500).send(error.toString());
    }
    res.status(200).send('¡Correo enviado!');
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
