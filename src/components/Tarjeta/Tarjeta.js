import React from "react"
import { Link } from 'react-router-dom';


export const TarjetaApli = ({ logo, nombre, texto, t1, t2 }) =>{
    return(
        <div className="Tarjeta">
            <Link className="App-enlace" to={t1}>
                <img src={logo} className="Tarjeta-logo" alt="logo" />
                <h3 className="Tarjeta-titulo">
                    {nombre}
                </h3>
                <p className="Tarjeta-texto">
                    {texto}
                </p>
            </Link>     
        </div>
    )
}