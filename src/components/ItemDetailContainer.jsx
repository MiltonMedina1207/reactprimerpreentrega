import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../servicio/firebase';
import { Link } from 'react-router-dom';




const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "zapatillas");
    const docRef = doc(productsCollection, itemId);

    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setProducto({ ...res.data(), id: res.id });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <p className="text-center my-5">Cargando producto...</p>;
  }

  if (invalid) {
    return (
      <div className="text-center my-5">
        <h2>¡El producto no existe!</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver a Home</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {producto ? (
        <ItemDetail item={producto} />
      ) : (
        <p className="text-center">Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;


 



 //promesa
  // useEffect(() => {
  //  setLoading(true);
   // getProductoPorId(itemId)
    //  .then((res) => {
//setProducto(res);
    //    setLoading(false);
     // })
     // .catch((err) => {
     //   console.error(err);
     //   setLoading(false);
     // });
 // }, [itemId]);

 // if (loading) return <p className="text-center my-5">Cargando producto...</p>;











