import {useState} from 'react'

function ItemCount({stock}) {
  
  const [count, setCount] = useState(0)
  const restar = () => {
    if (count > 0) {
      setCount( count -1)
    }
    else {
      alert ('No agregaste nada');
    }
    
  }
  const sumar = () => {
    if (count < stock) {
      setCount( count +1)
    }
    else {
      alert ('No hay más stock disponible');
    }
    
  }
  return (
    <div>
        <div>
              <button className='btn btn-danger' onClick={restar}>-</button>
              <span className= "btn">{count} </span>
              <button className='btn btn-success' onClick={sumar}>+</button> 
        </div>
        <button className='btn btn-primary'>Agregar carrito</button>
    </div>
  )
}

export default ItemCount