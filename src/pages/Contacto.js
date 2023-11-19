import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import tarjetaPresentacion from '../assets/tpJLCP.png'
import { Helmet } from 'react-helmet';



const Contacto = () => {
  return (
    <div>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      <h1>Página de Contacto</h1>

      <p>
        Si desea mas información sobre nuestros productos, comuniquese al numero de 
        <a href="https://api.whatsapp.com/send/?phone=50248491470">
        WhatsApp  +502 4849 1470.
        </a>
      </p>

      <img src={tarjetaPresentacion} className="Foto2" alt="Banner" />

      <ContactForm/>

    </div>
  );
};

export default Contacto;