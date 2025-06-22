import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../servicio/firebase'
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [buyer, setBuyer] = useState({})
  const [validateEmail, setValidateEmail] = useState("")
  const [orderId, setOrderId] = useState("")
  const { cart, carTotal, clear } = useContext(CartContext)
  
  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const finalizarCompra = (e) => {
    e.preventDefault()
    if (!buyer.name || !buyer.email || !buyer.address || !validateEmail) {
      alert("Todos los campos son obligatorios.")
      
    } else if (buyer.email !== validateEmail) {
      alert("Los correos electrónicos no coinciden.")
      
    } else {
      let orden = {
        comprador: buyer,
        compras: cart,
        total: carTotal(),
        date: serverTimestamp()
      }
      const ventas = collection(db, "orders")
      
      addDoc(ventas, orden)
        .then((res) => {
          setOrderId(res.id)
          clear()
        })
        .catch((error) => console.error(error))
    }
    }
    
  console.log(buyer)
  

  return (
    orderId
      ? (
        <div>
          <h2>Generaste tu orden correctamente</h2>
          <h2>El id: {orderId}</h2>
          <Link to="/" className=" btn btn-dark">Volver a home!</Link>
        </div>
      )
      : (
        <div>
          <h1>Completa con tus datos</h1> 
          <form onSubmit={finalizarCompra}>
            <input className="form-control" placeholder="Ingresa tu nombre Completo" type="text" name="name" onChange={buyerData} />
            <input className="form-control" placeholder="Ingrese dirección de envío" type="text" name="address" onChange={buyerData} />
            <input className="form-control" type="email" placeholder="Ingrese tu correo electrónico" name="email" onChange={buyerData} />
            <input className="form-control" type="email" placeholder="Repite tu correo electrónico" name="email2" onChange={(e) => setValidateEmail(e.target.value)} />
            <button className='btn btn-primary' type="submit">Finalizar compra</button>
          </form>   
        </div>
      )
  )
  
}

export default Checkout
