import React from 'react';
import foto from '../assets/FotoJL.jpg';



const AcercaDe = () => {
  return (
    <div>
      <h1>Acerca de</h1>
      <p>
        D3sarrollo es el nombre comercial registrado de Juan Luis Carrillo, ingeniero civil desarrollador android.
      </p>

      <img src={foto} className="Foto" alt="foto" />

      <p></p>
      <a href="https://www.linkedin.com/in/juan-luis-carrillo-339266154/">
        Perfil de LinkedIn
      </a>

      {/* Contenido de la página de inicio */}
    </div>
  );
};

export default AcercaDe;