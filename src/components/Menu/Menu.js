import React from "react"
import { BrowserRouter, Link as Router, Routes, Route, Link }
    from 'react-router-dom';
import Home from '../../pages/Home';
import Contacto from '../../pages/Contacto';
import GPST from '../../pages/GPST';

import logo from '../../components/Cabecera/assets/LogoD3sf.png';



export const Menu = () =>{
    return(
        <div>     
            <BrowserRouter>

                <div className="App-header">         
                    <Link className="App-enlace" to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <Link className="App-enlace" to="/contacto">
                        Contacto
                    </Link>
                </div>
                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/gpst" element={<GPST/>}/>
                </Routes>
            
            </BrowserRouter>   
        </div>
    )
}

export default Menu;