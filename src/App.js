// src/App.js
import React from 'react';
import NavBar from './components/NavBar'; // Importamos NavBar
import ItemListContainer from './components/ItemListContainer'; // Importamos ItemListContainer

const App = () => {
  return (
    <div className="app">
      <NavBar /> {/* Barra de navegación con el icono de carrito */}
      <ItemListContainer /> {/* Lista de productos */}
    </div>
  );
};

export default App;

import './styles.css'; // Asegúrate de que la ruta sea correcta
