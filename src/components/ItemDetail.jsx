import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <img src={item.imagen} className="card-img-top" alt={item.nombre} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.descripcion}</p>
        <p className="card-text">Precio: ${item.precio}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={(cant) => alert(`Agregado ${cant} al carrito`)} />
      </div>
    </div>
  );
};

export default ItemDetail;

