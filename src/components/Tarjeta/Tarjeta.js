import React from "react"

export const TarjetaApli = ({ logo, nombre, texto }) =>{
    return(
        <div className="Tarjeta">
            <img src={logo} className="Tarjeta-logo" alt="logo" />
            <h3>
            {nombre}
            </h3>
            <p>
            {texto}
            </p>
        </div>
    )
}