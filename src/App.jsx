import React from 'react';
import Navbar from './components/Navbar';
import Contenedor from './components/Contenedor';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Contenedor mensaje="¡Bienvenido a Zapam, para que pises fuerte y con estilo!" />
    </div>
  );
};

export default App;
