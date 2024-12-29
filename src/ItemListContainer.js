// src/components/ItemListContainer.js
import React from 'react';

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      <h2>Productos Disponibles</h2>
      <div className="item-list">
        {/* Aquí podrías mapear los productos o items */}
        <div className="item">Producto 1</div>
        <div className="item">Producto 2</div>
        <div className="item">Producto 3</div>
      </div>
    </div>
  );
};

export default ItemListContainer;
