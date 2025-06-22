import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const [compra, setCompra]= useState(false)
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCompra(true)
    console.log(`Compraste ${cantidad} del producto ${item.name}`);
    addItem(item, cantidad);
  };

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <img src={item.imagen} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.descripcion}</p>
        <p className="card-text">Precio: ${item.precio}</p>
        {compra
          ? <div className="d-flex gap-3 mt-5">
            <Link  to="/" className=" btn btn-primary">Seguir comprando</Link>
            <Link  to="/cart" className=" btn btn-success">Ir al carrito</Link>
            </div>
          :<ItemCount stock={item.stock} onAdd={onAdd} />}
      </div>
    </div>
  )
};

export default ItemDetail;

