import React from "react"
import { BrowserRouter, Link as Router, Routes, Route, Link }
    from 'react-router-dom';
import Home from '../../pages/Home';
import Contacto from '../../pages/Contacto';
import GPST from '../../pages/GPST';
import AcercaDe from '../../pages/AcercaDe';
import ZombieDefense from '../../pages/ZombieDefense';


import logo from '../../components/Cabecera/assets/LogoD3sf.png';



export const Menu = () =>{
    return(
        <div>     
            <BrowserRouter>

                <div className="App-header">         
                    <Link className="App-enlace" to="/d3sarrollo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <Link className="App-enlace" to="/d3sarrollo/contacto">
                        Contacto
                    </Link>
                    <Link className="App-enlace" to="/d3sarrollo/acerca-de">
                        Acerca de
                    </Link>
                </div>
                
                <Routes>
                    <Route path="/d3sarrollo" element={<Home/>}/>
                    <Route path="/d3sarrollo/contacto" element={<Contacto/>}/>
                    <Route path="/d3sarrollo/acerca-de" element={<AcercaDe/>}/>

                    <Route path="/d3sarrollo/gpst" element={<GPST/>}/>
                    <Route path="/d3sarrollo/zombie-defense" element={<ZombieDefense/>}/>

                </Routes>
            
            </BrowserRouter>   
        </div>
    )
}

export default Menu;