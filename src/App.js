import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/Home/Home';
import Contacto from './pages/Contacto';



function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>   
  );
}

export default App;