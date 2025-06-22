import React from 'react'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
      <div>
          <h2>Tu carrito esta vacio! </h2>
          <h4>Animate a surtirte de zapass! </h4>
          <Link className='btn btn-primary' to="/">Ir a comprar ya!</Link>
    </div>
  )
}

export default EmptyCart