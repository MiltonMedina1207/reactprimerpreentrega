import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavbarReactBootstrap />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a Zapam!" />} />
        <Route path="/marca/:marcaId" element={<ItemListContainer mensaje="Estas en la Categoria: " />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;




