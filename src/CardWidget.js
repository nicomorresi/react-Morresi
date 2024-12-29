// src/components/CardWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Puedes usar react-icons o cualquier otra librería de iconos

const CardWidget = () => {
  return (
    <div className="card-widget">
      <FaShoppingCart size={24} />
    </div>
  );
};

export default CardWidget;
