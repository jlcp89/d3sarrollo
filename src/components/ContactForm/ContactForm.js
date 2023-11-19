// ContactForm.js

import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Correo enviado exitosamente');
      } else {
        console.error('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Correo Electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Mensaje:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
