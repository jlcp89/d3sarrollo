import React from "react"
import { Helmet } from 'react-helmet';
import { TarjetaApli } from '../components/Tarjeta/Tarjeta';
import logo1 from '../assets/GPSTPRO.png';
import logoStruc from '../assets/struc.png';
import logoZombie from '../assets/logozombie.png';
import logoX3la from '../assets/x3la.png';
import logoTalk from '../assets/talkAI.png';
import logoNews from '../assets/D3n.png';
import bannerD3 from '../assets/bannerD3.png';

export const Home= () =>{
    return(
      
        <div className="App">
          <Helmet>
            <title>D3sarrollo</title>
          </Helmet>
          
          <img src={bannerD3} className="Banner" alt="Banner" />

          <h1>
            Aplicaciones android publicadas desde 2017
          </h1>
      
          <body>
            <div class="Tarjetas">

            <TarjetaApli 
                logo={logoNews} 
                nombre="D3 News" 
                texto="Android News app developed with MVVM and Clean Architecture"
                t1 = "d3-news">
            </TarjetaApli>
              
              <TarjetaApli 
                logo={logo1} 
                nombre="Topografía GPS" 
                texto="Libreta topográfica digital con GPS: cálculos y dibujo profesional para imprimir"
                t1="gpst">
              </TarjetaApli>

              <TarjetaApli 
                logo={logoZombie} 
                nombre="Zombie Defense" 
                texto="¡Sobrevive al apocalipsis zombi en este juego de disparos 2D minimalista!"
                t1="zombie-defense">
              </TarjetaApli>

              <TarjetaApli 
                logo={logoStruc} 
                nombre="Structural 2d" 
                texto="Análisis estructural de marcos bidimensionales con el método de las rigideces"
                t1="structural-2d">
              </TarjetaApli>        

              <TarjetaApli 
                logo={logoX3la} 
                nombre="x3la.site" 
                texto="App android con el mapa de servicios de la ciudad de Quetzaltenango">
              </TarjetaApli>

              <TarjetaApli 
                logo={logoTalk} 
                nombre="Talk AI" 
                texto="App android chat de voz con ChatGPT 3.5">
              </TarjetaApli>
            </div>
          </body>
    </div>
    )
}

export default Home;