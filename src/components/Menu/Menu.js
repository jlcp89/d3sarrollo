import React from "react"
import { BrowserRouter, Link as Router, Routes, Route, Link }
    from 'react-router-dom';
    import {HashRouter}
    from 'react-router-dom';
import Home from '../../pages/Home';
import Contacto from '../../pages/Contacto';
import GPST from '../../pages/GPST';
import AcercaDe from '../../pages/AcercaDe';
import ZombieDefense from '../../pages/ZombieDefense';
import D3News from '../../pages/D3News';
import Structural2d from '../../pages/Structural2d';


import logo from '../../components/Cabecera/assets/LogoD3sf.png';



export const Menu = () =>{
    return(
        <div>     
            <HashRouter>

                <div className="App-header">         
                    <Link className="App-enlace" to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <Link className="App-enlace" to="contacto">
                        Contacto
                    </Link>
                    <Link className="App-enlace" to="acerca-de">
                        Acerca de
                    </Link>
                </div>
                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/acerca-de" element={<AcercaDe/>}/>

                    <Route path="/gpst" element={<GPST/>}/>
                    <Route path="/zombie-defense" element={<ZombieDefense/>}/>
                    <Route path="/d3-news" element={<D3News/>}/>
                    <Route path="/structural-2d" element={<Structural2d/>}/>

                </Routes>
            
            </HashRouter>   
        </div>
    )
}

export default Menu;