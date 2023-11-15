import React from "react"
import logo from './assets/LogoD3sf.png';

export const Cabecera = () =>{
    return(
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            D3sarrollo
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Acerca de
            </a>
        </div>
    )
}