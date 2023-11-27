import React from 'react';
import { Helmet } from 'react-helmet';


const Structural2d = () => {
  return (
    <div>
      <Helmet>
        <title>Structural 2d</title>
      </Helmet>
      <h1>Structural 2d</h1>

      

      <p>
      Structural Engineer 2d, la calculadora estructural definitiva para Android. 
      </p>

      <a href="/downloads/StructuralEngineer2d_2.apk" download>
        Descargar Instalador (APK)
      </a>

      <iframe src="https://www.youtube.com/embed/3Aq7NpeFLPk?si=HMlNguhnFIFhmuom" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <p>
      Resuelve marcos estructurales con el método básico de las rigideces, lo que permite brindar solución exacta y rápida a los problemas con que se enfrentan los diseñadores.  Apps similares poseen una creación de elementos estructurales por medio de dibujo sobre líneas guía predefinidas (no por el usuario).
      </p>
      <p>
      Nosotros ofrecemos un método de entrada profesional para cada sección transversal, nodo, elemento y carga que el usuario desea modelar; esto permite personalizar la ubicación de cada elemento estructural, lo que brinda mayor versatilidad a nuestros usuarios, para modelar las situaciones que se presentan en la vida real, todos los días.
      </p>
      <p>
      Todo el procedimiento está basado y probado con los problemas de capítulo 16 (Análisis de marcos planos utilizando el método de la rigidez) de la octava edición del libro de análisis estructural de R. C. Hibbeler.
      </p>
      <p>
      En la versión gratuita el usuario puede crear hasta 9 nodos y tiene la opción de ver un vídeo promocional (para mantener la app gratis) cuando se corre el análisis. Si lo hace, como premio se imprimirá un reporte en formato .txt con la siguiente información: datos de las secciones transversales creadas, datos de elemento, datos de la estructura (como la matriz de rigidez total), datos de las cargas aplicadas (para analizar), las cargas conocidas (Qk), las deflexiones conocidas (Dk).
      </p>
      <p>
      Este archivo se genera dentro de la carpeta “Reports - StructuralAnalysis2d”, ubicada en el almacenamiento interno de su dispositivo.   En la misma carpeta y con el mismo nombre del archivo .txt se guarda un archivo .jpg con la imagen del marco, para impresión. Se tiene más información del reporte al final de este documento. 
      </p>
      <h3>
      Instrucciones de uso
      </h3>

      <ol>
      <li>
      Al instalar la app, se le solicitara permiso para acceder a los archivos en su dispositivo; eso es con el único fin de poder imprimir los archivos (.txt y .jpg), resultado de cada análisis que se realiza.
      </li>
      <li>
      Seleccione las unidades para trabajar: desea trabajar en unidades del sistema internacional(m) o inglés (ft).
      </li>
      <li>
      Lo primero que debe hacer es crear una sección transversal, en función del material y la forma del elemento estructural.   Las unidades en que debe ingresar los datos, se expresan en la pantalla de la app, según cada sistema de unidades.  Los datos se le pueden pedir con alguna notación numérica de base 10, con el fin de evitar errores en el ingreso por parte del usuario y en consonancia con la notación utilizada por los libros de texto.
      Si no ingresa ningún dato y guarda la sección, todos los valores se tomarán igual a uno, esto puede causar errores a la hora del análisis. Se le presenta el número identificador (id) de esta sección, para que la pueda identificar posteriormente. Luego se le solicita que ingrese:
      <ul>
        <li>
      Módulo de Elasticidad (E)
      </li>
      <li>
      Inercia de la sección (I)
      </li>
      <li>
      Área de la sección (A).
      </li>
      </ul>
      </li>
      <li>
      Ahora debe crear los nodos que componen su estructura.  Para poder realizar el
      análisis, la app necesita que existan al menos tres nodos creados.  Si usted únicamente desea analizar una viga con dos apoyos, puede seccionarla en dos partes, creando un nodo en algún punto de la viga; esto no afectará el análisis y le dará más información de cómo se comportó la estructura al ser analizada.  Se le presenta el número identificador (id) de este nodo, para que lo pueda identificar posteriormente.  Después se le pide la siguiente información:
      <ul>
      <li>
      Coordenada en “X” (horizontal) y “Y” (vertical). En metros para sistema internacional y en pies para el sistema inglés.
      </li>
      <li>
      Seleccionar si el nodo es un apoyo o no. Por defecto esta seleccionada la opción “No”
      </li>
      <li>
      Si es un apoyo, entonces se activarán los botos de abajo, donde debe seleccionar el tipo de apoyo: si es un pin o un empotramiento. Por el momento, solo se tienen estas dos opciones de apoyo, con dos y tres reacciones respectivamente.
      </li>
      <li>
      Para facilitar la creación de nodos, se añadió el botón “Guardar y crear otro nodo”: si lo presiona será enviado a una nueva pantalla para crear otro nodo.  Si selecciona el botón “Guardar y regresar”, el nodo se guardará y usted regresará a la pantalla principal de la app, donde puede ver el dibujo de su estructura.  Si no ingresa ningún valor las coordenadas se tomarán igual a cero.
      </li>
      </ul>
      </li>
      <li>
      Es momento de crear los elementos que forman el marco estructural.  Como se indicó antes, la app necesita al menos dos elementos para funcionar, por lo que, si usted desea analizar una viga simple, puede partirla en dos partes, incluyendo un nodo en un punto de su elección.  Se le presenta el número identificador (id) de este elemento, para que lo pueda identificar posteriormente. Después se le pide la siguiente información:
      <ul>
      <li>
      Debe seleccionar el nodo de inicio (N) del elemento, de la primera lista desplegable. 
      </li>
      <li>
      Debe seleccionar el nodo de final (F) del elemento, de la segunda lista desplegable.
      </li>
      <li>
      Debe seleccionar la sección transversal que corresponde a este elemento, de la tercera lista desplegable.
      </li>
      <li>
      Al igual que la pantalla para crear nodos, también se tienen los botones “Guardar y crear otro elemento” y “Guardar y regresar” para regresar a la pantalla principal de la app.
      </li>
      </ul>
      </li>

      <li>
      Una vez creados los elementos del marco, es hora de agregar las cargas a las que está sometida la estructura.  Por seguridad la app solo le dejara crear cargas, cuando se hallan agregado al menos dos elementos.  La app necesita tener al menos una carga creada, para poder correr el análisis. Para crear una carga, se le solicita lo siguiente:
      <ul>
      <li>
      Debe seleccionar el elemento donde se va a aplicar la carga.
      </li>
      <li>
      Debe seleccionar el tipo de carga, para esto tiene 4 opciones, por el momento (se tienen planeado incluir más casos de carga en futuras versiones):
      <ul>
      <li>
      Carga Puntual
      </li>
      <li>
      Carga Uniformemente distribuirá
      </li>
      <li>
      Carga distribuida de forma triangular
      </li>
      <li>
      Momento
      </li>
      <li>
      Por defecto esta seleccionada la carga puntual
      </li>
      </ul>
      </li>

      <li>
      Debe ingresar la magnitud de la carga. Las dimensionales se muestran en la pantalla de la app, según el caso de carga seleccionado y el sistema de unidades de medida.
      </li>
      <li>
      Después de debe ingresar la distancia “A”, que es la distancia medida en metros o pies (según el sistema de medida), desde el nodo N del elemento, hasta el punto de aplicación de la carga, según los diagramas mostrados en los botones. 
      </li>
      <li>
      También se tienen los botones “Guardar y crear otra carga” y “Guardar y regresar” para regresar a la pantalla principal de la app.  Si no ingresa ningún valor los valores se tomaran igual a cero
      </li>
      </ul>
      </li>

      <li>
      Finalmente, luego de ingresar las cargas respectivas, presione este botón para correr el análisis en la estructura.  La app procede a realizar los cálculos necesarios para resolver la estructura.  Cuando finaliza, imprime los resultados en la pantalla para cada nodo se presentan las reacciones y desplazamientos respectivos.
      <ul>
      <li>
      Si el usuario ve el video promocional (la publiciadad es necesaria para mantener la app gratis), se genera un archivo .txt cuyo nombre es la fecha y hora en que se genera en el siguiente formato “AAAAMMDDHHMM” (año mes día hora minuto). El reporte se explica más abajo.  Este archivo se genera dentro de la carpeta “Reports - StructuralAnalysis2d”, ubicada en el almacenamiento interno de su dispositivo.
      </li>
      <li>
      También se genera un archivo .jpg, cuyo nombre es igual al del archivo .txt, creado en la misma carpeta.  Esto para facilitar la identificación de los dos archivos de cada análisis realizado.
      </li>
      <li>
      Estos archivos se generan dentro de la  carpeta  “Reports-StructuralAnalysis 2d”, ubicada en el almacenamiento interno de su dispositivo. 
      </li>
      </ul>
      </li>

      <li>
      El reporte se genera en el archivo .txt, cada vez que la app ejecuta un análisis y consta de 6 partes:
      <ul>
      <li>
      Datos de la sección transversal: se muestra el módulo de elasticidad, inercia y área de las secciones transversales creadas.
      </li>
      <li>
      Datos de los elementos: para cada elemento se muestran los datos del nodo N y F para cada elemento, su longitud, factores de inclinación en X y Y y la matriz de rigidez global del elemento, con fines de verificación para proyectos grandes.
      </li>
      <li>
      Datos de la estructura, se muestra:
      <ul>
      <li>
      El  número  de  nodos,  apoyos  y  elementos  que  componen  la  estructura  al momento del análisis.
      </li>
      <li>
      Se imprime la matriz de rigidez de la estructura (K), con fines de verificación; esta  matriz  es  la  clave  para  resolver  la  estructura.    Tiene  un  tamaño  de [#nodos *3]x[#nodos *3].  Si la estructura tiene 3 nodos (incluyendo soportes), esta matriz será de 9x9. Si el marco tiene 18 nodos, esta matriz tendrá un tamaño de 54x54, etc.
      </li>
      </ul>
      </li>
      <li>
      Datos de carga (para analizar)
      <ul>
      <li>
      Para cada elemento se presenta su ángulo de inclinación y las cargas aplicadas, pasadas a sus equivalentes de empotramiento perfecto y descompuesta en componentes x,y,z.
      </li>
      <li>
      Las cargas conocidas (Qk): es el vector de cargas conocidas en la estructura, y depende de las cargas aplicadas y del caso de apoyo del marco.
      </li>
      <li>
      Las deflexiones conocidas (Dk): es el vector de deflexiones conocidas en la estructura y depende de la condición de apoyo.   En un empotramiento las deflexiones en los tres sentidos están restringidas (iguales a cero siempre), pero en un apoyo pineado, solo dos sentidos están restringidos y dado que no hay restricción al momento se tendrá un desplazamiento en ese sentido. 
      </li>
      </ul>
      </li>

      </ul>
      </li>





      </ol>
    </div>
  );
};

export default Structural2d;