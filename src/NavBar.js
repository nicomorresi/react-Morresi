// src/components/NavBar.js
import React from 'react';
import CardWidget from './CardWidget'; // Importamos CardWidget

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Mi Tienda</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="navbar-cart">
        <CardWidget /> {/* Aquí renderizamos el icono del carrito */}
      </div>
    </nav>
  );
};

export default NavBar;
