import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarReactBootstrap />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a Zapam!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;




