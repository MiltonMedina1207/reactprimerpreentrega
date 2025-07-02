import { useState } from 'react';

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1); 
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert('La cantidad mínima es 1');
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert('No hay más stock disponible');
    }
  };

  const comprar = () => {
    onAdd(count);
    alert(`Agregaste ${count} productos al carrito`);
  };

  return (
    <div>
      <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span className="btn">{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
      </div>
      <button className='btn btn-primary' onClick={comprar} disabled={count === 0}>
        Agregar carrito
      </button>
    </div>
  );
}

export default ItemCount;
