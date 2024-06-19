// BackToTopButton.js

import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando la posición de desplazamiento es mayor que 100px
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Manejar el evento de desplazamiento
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Volver arriba al hacer clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          Ir Arriba
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
