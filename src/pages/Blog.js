import React from 'react';
import { Helmet } from 'react-helmet';
import logo1 from '../assets/GPSTPRO.png';
import { TarjetaApli } from '../components/Tarjeta/Tarjeta';



const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog D3</title>
      </Helmet>
      <h1>Información técnica util para profesionales de la Construcción</h1>

      <div class="Tarjetas">

           
              
              <TarjetaApli 
                logo={logo1} 
                nombre="Topografía GPS" 
                texto="Libreta topográfica digital con GPS: cálculos y dibujo profesional para imprimir"
                t1="gpst">
              </TarjetaApli>

             
            </div>

      
      
      
    </div>
  );
};

export default Blog;