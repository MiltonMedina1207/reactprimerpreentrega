import React from 'react';

const Contenedor = ({ mensaje }) => {
  return (
    <div className="contenedor">
      <h2 className="titulo">{mensaje}</h2>
      <p className="descripcion">Estamos en reparacion</p>
    </div>
  );
};

export default Contenedor;
