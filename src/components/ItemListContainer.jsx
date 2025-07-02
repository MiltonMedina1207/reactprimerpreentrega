import React, { useState, useEffect } from 'react';
//import { getProductos } from '../services/AsyncService';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where,query} from 'firebase/firestore';
import { db } from '../servicio/firebase';

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { marcaId } = useParams();

  useEffect(() => {
    const productsCollection =  marcaId ? query(collection(db, "zapatillas"),where("marca","==",marcaId)): collection(db, "zapatillas")
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            ...doc.data(),
            id:doc.id
          }
        })
        setData(list)
        console.log(list)
      })
    .catch((error)=> console.log(error))
 },[marcaId])
 
  //useEffect(() => {
  //getProductos()
   // .then((respuesta) => {
     // if (marcaId) {
        // Comparamos en minúsculas
       // const productosFiltrados = respuesta.filter(
       //   (producto) => producto.marca.toLowerCase() === marcaId.toLowerCase()
      //  );
      //  setData(productosFiltrados);
     //} else {
      //  setData(respuesta);
     // }
   // })
    //.catch((error) => console.error(error));
//}, [marcaId]);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  

  return (
    <div>
      <h2 className="text-center my-4">
        {mensaje} {marcaId ? marcaId.toUpperCase() : ''}
      </h2>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;








