import React from "react"
import { Cabecera } from '../components/Cabecera/Cabecera';
import { TarjetaApli } from '../components/Tarjeta/Tarjeta';
import logo1 from '../assets/GPSTPRO.png';
import logoStruc from '../assets/struc.png.png';



export const Home= () =>{
    return(
        <div className="App">
      
      <body>
        <div class="Tarjetas">

          <TarjetaApli 
            logo={logo1} 
            nombre="Topografía GPS" 
            texto="Libreta topográfica digital con GPS: cálculos y dibujo profesional para imprimir"
            t1="gpst"
            t2="GPST">
          </TarjetaApli>

          <TarjetaApli 
            logo={logoStruc} 
            nombre="Structural 2d" 
            texto="Análisis estructural de marcos bidimensionales con el método de las rigideces">
          </TarjetaApli>

          <TarjetaApli 
            logo={logo1} 
            nombre="GPST" 
            texto="La mejor app">
          </TarjetaApli>

          <TarjetaApli 
            logo={logo1} 
            nombre="GPST" 
            texto="La mejor app">
          </TarjetaApli>

        </div>
      </body>
    </div>
    )
}

export default Home;