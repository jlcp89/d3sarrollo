import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logozombie.png';



const GPST = () => {
  return (
    <div>
      <Helmet>
        <title>Zombie Defense</title>
      </Helmet>
      <h1>Zombie Defense: Random Maps</h1>

      <p></p>
      <a href="/downloads/ZombieDefense.apk" download>
        Disponible aqui (APK)
      </a>

      <p>
        ¡Sobrevive al apocalipsis zombi en este juego de disparos 2D minimalista!  
      </p>

      <img src={logo} className="Foto" alt="foto" />

      <ul>
        <li>
        Mapas aleatorios: cada nivel se genera aleatoriamente, por lo que nunca jugarás el mismo juego dos veces
        </li>
        <li>
        Los zombis se vuelven más agresivos y rápidos a medida que avanzas
        </li>
        <li>
        Controles sencillos: desliza el dedo para moverte y toca para disparar
        </li>
        <li>
        ¡Zombis infinitos!
        </li>
      </ul>

      <p>
        ¡Descarga Zombie Defense: Random Maps hoy mismo y pon a prueba tus habilidades de supervivencia!
      </p>

      <p>
        Modo de juego: Zombie Defense: Random Maps es un juego de disparos en 2D en el que debes sobrevivir a oleadas de zombis. Los zombis aparecerán desde direcciones aleatorias y te atacarán. Puedes moverte por el mapa deslizando el dedo por la pantalla. Para atacar, toca uno de los botones de disparo. A medida que avances en el juego, los zombis se volverán más agresivos y rápidos.
      </p>

      <ul>
        <li>
          Mapas aleatorios
        </li>
        <li>
          Controles simples
        </li>
        <li>
          Zombis infinitos
        </li> 
      </ul>
    </div>
  );
};

export default GPST;