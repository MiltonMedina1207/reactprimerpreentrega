import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoPorId } from '../services/AsyncService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductoPorId(itemId)
      .then((res) => {
        setProducto(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <p className="text-center my-5">Cargando producto...</p>;

  return (
    <div className="container my-5">
      {producto ? <ItemDetail item={producto} /> : <p className="text-center">Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;


