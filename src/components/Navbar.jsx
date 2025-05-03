import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Zapam</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <div className="cart-widget">
        🛒 <span>(0)</span>
      </div>
    </nav>
  );
};

export default Navbar;
