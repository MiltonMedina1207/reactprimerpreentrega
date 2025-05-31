import React, { useState, useEffect } from 'react';
import { getProductos } from '../services/AsyncService';
import ItemList from './ItemList';

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos()
      .then((respuesta) => setData(respuesta))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-center my-4">{mensaje}</h2>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;







