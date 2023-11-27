import React from 'react';
import { Helmet } from 'react-helmet';


const GPST = () => {
  return (
    <div>
      <Helmet>
        <title>Topografía GPS</title>
      </Helmet>
      <h1>Topografía GPS</h1>

      <p></p>
      <a href="/downloads/GPST4.apk" download>
        Disponible aquí (PRO APK)
      </a>

      <p></p>
      

      <p>
        Disfrute de la mejor app para topografía en Android, ligera y efectiva.  
      </p>
      <iframe src="https://www.youtube.com/embed/lBPNq8WqpIs?si=7gFPjskGi8pApX8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      

      <p>
        Diseñada para ser el reemplazo definitivo de la libreta topográfica, de lápiz y papel; 100% offline.  Capture rápidamente información GPS de su dispositivo Android, para recopilar puntos, líneas o polígonos con Google Maps, o; recalcule cualquier polígono, ingresando los datos de mediciones de campo, realizadas anteriormente o en el momento, por medición directa o por radiaciones
      </p>
      

      <p>
        La app calcula coordenadas UTM, coordenadas parciales, errores, correcciones (con el método de Pennsylvania), coordenadas totales compensadas, perímetro y área del polígono (método matricial).  Las metodologías utilizadas para los cálculos son reconocidas como mejores prácticas de ingeniería civil, por lo que la app se considera diseñada para facilitar el trabajo de profesionales y estudiantes de topografía
      </p>
        
      <p>La versión PRO le dará acceso a las siguientes funciones:
        <ul>
        <li>
        Genere el archivo DXF
        </li>
        <li>
        Elimine todos los anuncios de la app
        </li>
        <li>
        Elimine membrete D3 en archivos PDF, TXT
        </li>
        <li>
        Elimine botón PRO de pantallas y menú
        </li>
        </ul>
        
      </p>
      <p>
        Exporte su información en un formato PDF con un informe completo con toda la memoria de cálculo, un archivo TXT para facilitar la importación en otros programas y un archivo DXF con el dibujo y la libreta topográfica / cuadro de construcción, pensado para facilitar la impresión de planos desde su software CAD preferido
        </p>
        <p>
        De esta manera hará más eficiente su trabajo de gabinete, ahorrando su valioso tiempo.  Estos archivos se generan al presionar el botón “Play”.  Los tres archivos se generan dentro de carpeta con nombre según fecha y hora de su creación, almacenada dentro del directorio “GPS_Topography_Projects” dentro de su almacenamiento interno
        </p>
        <p>
        En el menú de la app podrá acceder a la opción archivo, donde podrá guardar y cargar sus proyectos, por medio de una poderosa base de datos almacenada en su dispositivo.  También tiene la opción de exportar su polígono a un archivo CVS separado por comas, que se almacena en la carpeta “GPS_Topography_Exported”, dentro del almacenamiento interno de su dispositivo
        </p>
        <h3>
        INSTRUCCIONES DE USO
        </h3>
        <p>
        PANTALLA GPS (por defecto): use su dispositivo para capturar coordenadas fácilmente, puede capturar su posición actual para medir un polígono caminando sobre sus bordes
        <ol>
        <li>
        Al ingresar, la app centrara la pantalla en su posición actual
        </li>
        <li>
        Presione la pantalla, para capturar ese punto
        </li>
        <li>
        Ingrese el nombre del punto en cuestión
        </li>
        <li>
        Repita el proceso hasta que termine de ingresar los puntos de interés
        </li>
        <li>
        Presione el botón “Play”
        </li>
        </ol>
        </p>

        <p>
        PANTALLA LEVANTAMIENTO: genere dibujo y libreta digital en tiempo real.  Los puntos de polígonos auxiliares no se consideran parte del polígono final y se grafican en celeste, tanto en el dibujo como en la libreta
        <ol>
        <li>
        Desde la pantalla GPS, ingrese al menú de la app y seleccione la opción cambiar pantalla
        </li>
        <li>
        Indique si el punto inicial (E-0) es parte del polígono final o no
        </li>
        <li>
        Para agregar una estación, presione el botón agregar punto, en la esquina inferior izquierda
        </li>
        <li>
        Indique si la línea entre la estación y el punto observado es lindero o radiación.  Si es lindero el código del punto observado será el correlativo siguiente de la estación, si es radiación el código tendrá el formato “X.Y” donde “X” es el número de estación e “Y” es el número de radiación realizada a partir de la estación “X”
        </li>
        <li>
        Indique si esta línea es parte del polígono final o no. Ingrese la distancia (metros) y el azimut (grado, minuto, segundo) entre la estación y el punto observado, tomando como cero el norte y magnitud positiva a favor de las manecillas del reloj
        </li>
        <li>
        Una vez guardados todos sus puntos, presione el botón “Play”, se realizan los cálculos respectivos y se generan los archivos respectivos, calculando los datos y área del polígono
        </li>
        </ol>
        </p>
        <p>
        ¡Haciendo la topografía más eficiente!
        </p>

      
      
    </div>
  );
};

export default GPST;