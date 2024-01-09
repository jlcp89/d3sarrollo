import './App.css';
import React from 'react';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import BackToTopButton from './components/BackToTopButton/BackToTopButton'


function App() {

  return (
    <div>
      <Menu/>
      <BackToTopButton/>
      <Footer/>
    </div>
    
  );
}

export default App;