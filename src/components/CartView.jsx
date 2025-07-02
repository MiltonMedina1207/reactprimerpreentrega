import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'  // <-- IMPORTÁ Link

const CartView = () => {
  const {cart, carTotal, clear, removeItem}= useContext(CartContext)
  return (
    <div>
      <h2>Tu Carrito de compras🛒 </h2>
      <div>
        {cart.map((compra) => (
          <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width: "100%", padding:"2rem"}}>
            <img src={compra.imagen} alt={compra.name} style={{ width: "10rem" }} />
            <span>{compra.name}</span>
            <span>${compra.precio},00</span>
            <span>{compra.quantity}</span>
            <span>Precio Final: ${compra.precio * compra.quantity},00</span>
            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
          </div>
        ))}
      </div>
      <span>Total a pagar: ${carTotal()},00 </span>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%", padding: "2rem" }}>
        <button className='btn btn-danger' onClick={clear}>Borrar</button>
        
        {/* CAMBIADO: ahora es un Link a /checkout */}
        <Link to="/checkout" className='btn btn-dark'>Terminar compra</Link>
      </div>
    </div>
  )
}

export default CartView;


