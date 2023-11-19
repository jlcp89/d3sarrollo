import React from 'react';
import foto from '../assets/FotoJL.jpg';
import { Helmet } from 'react-helmet';




const AcercaDe = () => {
  return (
    <div>
      <Helmet>
        <title>Acerca de</title>
      </Helmet>
      <h1>Acerca de</h1>
      <p>
        D3sarrollo es el nombre comercial registrado de Juan Luis Carrillo, 
        consultor y desarrollador android senior.  Con más de 6 años de experiencia
        profesional como consultor en temas de infraestructura productiva, 
        competitividad, desarrollo economico y asesoria empresarial. 
        
      </p>

      <p>
      Ingeniero Civil con estudios de maestria en recursos hídricos. 
      Experto en incidencia política, desarrollo económico local, municipalismo y competitividad. 
      Consultor/Asesor para proyectos de Cooperación y Gobierno.
      </p>

      <p>
        Desarrollador android desde 2017, llevando a cabo todo el ciclo desarrollo, desde
        la eleccion de tematicas, palabras clave, desarrollo del backend y frontend de las apps,
        realizo la transición desde MVC con View a MVVVM con compose, contando con varias insignias
        de desarrollo android 
        <a href="https://developers.google.com/profile/u/102085573179034332964">
          perfil de Google for Developers
        </a>
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